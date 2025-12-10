import React from "react";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/server";
import LectureNavigatorLecture from "./LectureNavigatorLecture";
import type { LectureHierarchy, Roles } from "generated/prisma";
import LectureInitButton from "./LectureInitButton";

interface LectureNavigatorProps {
  userRole: Roles;
  userId: string;
}

type LectureHierarchyExtended = LectureHierarchy & {
  children: LectureHierarchyExtended[];
};

const isItemVisible = (
  item: LectureHierarchy,
  userId: string,
  userRole: Roles,
) => {
  return (
    item.isPublic === true ||
    (item.isPublic === false && userId === item.createdById)
  );
};

async function LectureNavigator(props: LectureNavigatorProps) {
  await requireLoggedIn();

  const lectures = await api.lectures.getLectureHierarchiesBuilded();

  function buildHierarchyTree(
    flatList: LectureHierarchy[],
  ): LectureHierarchyExtended[] {
    const allNodesMap = new Map<number, LectureHierarchyExtended>();
    const roots: LectureHierarchyExtended[] = [];

    const visibleNodesMap = new Map<number, LectureHierarchyExtended>();

    flatList.forEach((item) => {
      const node: LectureHierarchyExtended = { ...item, children: [] };
      allNodesMap.set(item.id, node);

      if (isItemVisible(item, props.userId, props.userRole)) {
        visibleNodesMap.set(item.id, node);
      }
    });

    visibleNodesMap.forEach((item) => {
      let currentParentId = item.HierarchyParentId;

      if (currentParentId !== null) {
        let parent = allNodesMap.get(currentParentId);

        while (parent && !visibleNodesMap.has(parent.id)) {
          currentParentId = parent.HierarchyParentId;

          if (currentParentId === null) {
            parent = undefined;
          } else {
            parent = allNodesMap.get(currentParentId);
          }
        }

        item.HierarchyParentId = parent ? parent.id : null;
      }
    });

    visibleNodesMap.forEach((item) => {
      if (item.HierarchyParentId === null) {
        roots.push(item);
      } else {
        const parent = visibleNodesMap.get(item.HierarchyParentId);

        if (parent) {
          parent.children.push(item);
        } else {
          roots.push(item);
        }
      }
    });

    return roots;
  }

  const buildedHierarchies = buildHierarchyTree(lectures);

  const renderLectureTree = async (nodes: typeof buildedHierarchies) => {
    if (nodes.length === 0) {
      return (
        <div className="flex w-full flex-col items-center justify-center gap-12 p-8">
          <span>Vypadá to, že tu nic není...</span>
          {props.userRole === "ADMIN" && <LectureInitButton />}
        </div>
      );
    }

    return Promise.all(
      nodes.map(async (lecture) => {
        const canEdit = await api.lectures.getIsPermitted({
          lectureId: lecture.id,
          userId: props.userId,
        });

        return (
          <LectureNavigatorLecture
            userId={props.userId}
            key={lecture.id}
            id={lecture.id}
            name={lecture.name}
            userRole={props.userRole}
            isPublic={lecture.isPublic}
            canEdit={canEdit}
          >
            {lecture.children && lecture.children.length > 0
              ? await renderLectureTree(lecture.children)
              : null}
          </LectureNavigatorLecture>
        );
      }),
    );
  };

  return (
    <div className="bg-background-card dark:bg-background-dark-card dark:text-text-dark-mode flex w-full flex-col justify-center overflow-hidden rounded-md text-2xl text-black">
      {renderLectureTree(buildedHierarchies)}
    </div>
  );
}

export default LectureNavigator;

import React from "react";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/server";
import LectureNavigatorLecture from "./LectureNavigatorLecture";
import type { LectureHierarchy, Roles } from "generated/prisma";

interface LectureNavigatorProps {
  userRole: Roles;
  userId: string;
}

type LectureHierarchyExtended = LectureHierarchy & {
  children: LectureHierarchyExtended[];
};

async function LectureNavigator(props: LectureNavigatorProps) {
  await requireLoggedIn();

  const lectures = await api.lectures.getLectureHierarchiesBuilded();

  function buildHierarchyTree(
    flatList: LectureHierarchy[],
  ): LectureHierarchyExtended[] {
    const map = new Map<number, LectureHierarchyExtended>();
    const roots: LectureHierarchyExtended[] = [];

    flatList.forEach((item) => {
      const node: LectureHierarchyExtended = { ...item, children: [] };
      map.set(item.id, node);
    });

    map.forEach((item) => {
      if (item.HierarchyParentId === null) {
        roots.push(item);
      } else {
        const parent = map.get(item.HierarchyParentId);
        if (parent) {
          parent.children.push(item);
        }
      }
    });

    return roots;
  }

  const buildedHierarchies = buildHierarchyTree(lectures);

  const renderLectureTree = (nodes: typeof buildedHierarchies) => {
    return nodes.map((lecture) => (
      <LectureNavigatorLecture
        userId={props.userId}
        key={lecture.id}
        id={lecture.id}
        name={lecture.name}
        userRole={props.userRole}
      >
        {lecture.children && lecture.children.length > 0
          ? renderLectureTree(lecture.children)
          : null}
      </LectureNavigatorLecture>
    ));
  };

  return (
    <div className="flex w-full flex-col justify-center overflow-hidden rounded-md bg-white text-2xl text-black">
      {renderLectureTree(buildedHierarchies)}
    </div>
  );
}

export default LectureNavigator;

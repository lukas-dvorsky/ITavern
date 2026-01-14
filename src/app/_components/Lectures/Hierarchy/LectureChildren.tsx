"use client";

import React from "react";
import { api } from "~/trpc/react";
import LectureChild from "./UI/LectureChild";

interface ILectureChildren {
  lectureId: number;
}

function LectureChildren(props: ILectureChildren) {
  const children = api.lectures.getLectureChildren.useQuery(props.lectureId);

  return (
    <div className="col-span-6 mx-auto mt-20 flex w-9/12 flex-col gap-12">
      {children.data?.map((child) => {
        const filteredCompletedLecturesCount = child.hierarchyChildren.filter(
          (ch) => ch.isPublic === true,
        ).length;

        return (
          <LectureChild
            key={child.id}
            lecture={child}
            createdBy={child.createdBy.name}
            updatedBy={child.updatedBy.name}
            maxLectures={child._count.hierarchyChildren}
            completedLectures={filteredCompletedLecturesCount}
          />
        );
      })}
    </div>
  );
}

export default LectureChildren;

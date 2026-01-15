"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import LectureChild from "./UI/LectureChild";
import type { ILectureFilterParams } from "./LectureChildStatistics";

interface ILectureChildren extends React.HTMLAttributes<HTMLDivElement> {
  lectureId: number;
  turnoffAnimation?: boolean;
  filters?: ILectureFilterParams;
}

function LectureChildren(props: ILectureChildren) {
  const children = api.lectures.getLectureChildren.useQuery(props.lectureId);
  const lectureIds = React.useMemo(
    () => children.data?.map((l) => l.id) ?? [],
    [children.data],
  );

  const completionStatuses = api.lectures.getLecturesCompletionStatus.useQuery(
    lectureIds,
    {
      enabled:
        !!props.filters &&
        (props.filters.showCompleted || props.filters.showUncompleted) &&
        lectureIds.length > 0,
    },
  );

  const filteredData = React.useMemo(() => {
    if (!children.data) return [];
    if (!props.filters) return children.data;

    let result = children.data;
    const { filters } = props;

    if (filters.showCompleted && completionStatuses.data) {
      result = result.filter((d) => {
        const status = completionStatuses.data.find(
          (s) => s.lectureId === d.id,
        );
        return !!status;
      });
    }

    if (filters.showUncompleted && completionStatuses.data) {
      result = result.filter((d) => {
        const status = completionStatuses.data.find(
          (s) => s.lectureId === d.id,
        );
        return !status;
      });
    }

    if (filters.searchPrompt) {
      const search = filters.searchPrompt.toLowerCase();
      result = result.filter((d) => d.name.toLowerCase().includes(search));
    }

    return result;
  }, [children, props.filters]);

  return (
    <div className={`${props.className}`}>
      {filteredData?.map((child) => {
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
            turnoffAnimations={props.turnoffAnimation}
          />
        );
      })}
    </div>
  );
}

export default LectureChildren;

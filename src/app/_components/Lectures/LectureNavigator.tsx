import React from "react";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/server";
import LectureNavigatorLecture from "./LectureNavigatorLecture";

interface LectureNavigatorProps {}

async function LectureNavigator(props: LectureNavigatorProps) {
  await requireLoggedIn();

  const lectures = await api.lectures.getLectureHierarchies();

  const renderLectureTree = (nodes: typeof lectures) => {
    return nodes.map((lecture) => (
      <LectureNavigatorLecture key={lecture.id} name={lecture.name}>
        {lecture.children && lecture.children.length > 0
          ? renderLectureTree(lecture.children)
          : null}
      </LectureNavigatorLecture>
    ));
  };

  return <div>{renderLectureTree(lectures)}</div>;
}

export default LectureNavigator;

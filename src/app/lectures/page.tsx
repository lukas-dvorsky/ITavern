import React from "react";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/server";
import LecturePageWrapper from "../_components/Lectures/Hierarchy/LecturePageWrapper";

async function LecturePage() {
  const session = await requireLoggedIn();

  const lectures = await api.lectures.getParentLectures();

  return (
    <>
      <LecturePageWrapper
        userRole={session.user.role}
        lectures={lectures}
        userId={session.user.id}
      />
    </>
  );
}

export default LecturePage;

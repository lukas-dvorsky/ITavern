import React from "react";
import { api } from "~/trpc/react";

interface LecturePermissionListProps {
  lectureId: number;
}

function LecturePermissionList(props: LecturePermissionListProps) {
  const permittedUsers = api.lectures.getPermittedUsers.useQuery(
    props.lectureId,
  );

  return (
    <div className="dark:bg-background-dark/20 col-span-6 flex h-96 flex-col overflow-hidden rounded-md">
      {permittedUsers.data?.map((user, index) => {
        return (
          <div>
            <span>{user.user.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default LecturePermissionList;

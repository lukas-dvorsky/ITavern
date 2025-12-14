import type { QueryObserverResult } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";
import { MdVpnKeyOff } from "react-icons/md";
import type { PermittedUser } from "./LecturePermissionEdit";

interface LecturePermissionListProps {
  lectureId: number;
  permittedUsers?: PermittedUser[];
  refetchAll: () => Promise<void>;
}

function LecturePermissionList(props: LecturePermissionListProps) {
  const removePermission = api.lectures.removePermission.useMutation({
    onSuccess: (_data, variables) => {
      const user = props.permittedUsers?.find(
        (u) => u.userId === variables.userId,
      );
      toast.success(
        `Uživateli ${user?.user.name} byla úspěšně odebrána práva.`,
      );
      props.refetchAll();
    },
    onError: (_error, variables) => {
      const user = props.permittedUsers?.find(
        (u) => u.userId === variables.userId,
      );
      toast.error(`Uživateli ${user?.user.name} se nepovedla odebrat práva.`);
    },
  });

  return (
    <div className="dark:bg-background-dark/20 bg-background-card col-span-6 flex h-96 flex-col overflow-hidden rounded-md">
      {props.permittedUsers?.map((user, index) => (
        <div
          key={index}
          className="dark:hover:bg-background-dark/20 flex items-center justify-between px-4 py-4"
        >
          {user.user.name}
          <button
            className="dark:hover:bg-background-dark/60 rounded-sm p-2 hover:cursor-pointer"
            onClick={() =>
              removePermission.mutate({
                userId: user.userId,
                lectureId: props.lectureId,
              })
            }
          >
            <MdVpnKeyOff />
          </button>
        </div>
      ))}

      {props.permittedUsers?.length === 0 && (
        <div className="m-auto text-sm">
          <span>K této lekci nemá nikdo přiřazená práva.</span>
        </div>
      )}
    </div>
  );
}

export default LecturePermissionList;

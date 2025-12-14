import type { QueryObserverResult } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { MdVpnKey } from "react-icons/md";
import { api } from "~/trpc/react";

interface LecturePermissionRecordProps {
  name: string;
  userId: string;
  lectureId: number;
  refetch: () => Promise<void>;
}

function LecturePermissionRecord(props: LecturePermissionRecordProps) {
  const addPermission = api.lectures.gainPermission.useMutation({
    onSuccess: () => {
      toast.success(`Uživateli ${props.name} byla úspěšně přiřazena práva.`);
      props.refetch();
    },
    onError: () => {
      toast.error(`Uživateli ${props.name} se nepovedla přiřadit práva.`);
    },
  });

  if (!props.name) return;

  return (
    <div className="dark:hover:bg-background-dark/20 flex items-center justify-between px-4 py-4">
      {props.name}
      <button
        className="dark:hover:bg-background-dark/60 rounded-sm p-2 hover:cursor-pointer"
        onClick={() =>
          addPermission.mutate({
            userId: props.userId,
            lectureId: props.lectureId,
          })
        }
      >
        <MdVpnKey />
      </button>
    </div>
  );
}

export default LecturePermissionRecord;

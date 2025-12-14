import React, { useRef, useCallback } from "react";
import Modal, { type ModalHandle } from "../Modals/Modal";
import LecturePermissionList from "./LecturePermissionList";
import SearchBar from "../Navigation/SearchBar";
import { api } from "~/trpc/react";
import LecturePermissionRecord from "./LecturePermissionRecord";

export interface PermittedUser {
  userId: string;
  user: {
    name: string | null;
  };
}

export interface UnpermittedUser {
  id: string;
  name: string | null;
}

interface LecturePermissionEditProps extends React.HTMLAttributes<HTMLButtonElement> {
  lectureId: number;
}

function LecturePermissionEdit(props: LecturePermissionEditProps) {
  const unpermittedUsersQuery = api.lectures.getUnpermittedUsers.useQuery({
    lectureId: props.lectureId,
  });

  const permittedUsersQuery = api.lectures.getPermittedUsers.useQuery(
    props.lectureId,
  );

  const modalRef = useRef<ModalHandle>(null);

  const refetchAll = useCallback(async () => {
    await Promise.all([
      unpermittedUsersQuery.refetch(),
      permittedUsersQuery.refetch(),
    ]);
  }, [unpermittedUsersQuery, permittedUsersQuery]);

  return (
    <>
      <button
        className={`${props.className} bg-background-card dark:border-background-dark dark:bg-background-dark-card flex cursor-pointer items-center justify-center gap-4 rounded-sm border border-gray-400 px-2 py-1`}
        onClick={() => modalRef.current?.open()}
      >
        Editace práv
      </button>

      <Modal ref={modalRef} title="Editace práv">
        <LecturePermissionList
          lectureId={props.lectureId}
          permittedUsers={permittedUsersQuery.data}
          refetchAll={refetchAll}
        />

        <SearchBar
          className="col-span-6"
          listClassname="h-64"
          searchBarClassname="col-span-12"
          filterFunction={(searchFor) =>
            unpermittedUsersQuery.data
              ?.filter((user) =>
                user.name?.toLowerCase().includes(searchFor.toLowerCase()),
              )
              .map((user) => {
                if (!user.name) return null;
                return (
                  <LecturePermissionRecord
                    key={user.id}
                    name={user.name}
                    userId={user.id}
                    lectureId={props.lectureId}
                    refetch={refetchAll}
                  />
                );
              })
          }
        />
      </Modal>
    </>
  );
}

export default LecturePermissionEdit;

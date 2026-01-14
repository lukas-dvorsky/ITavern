import type { LectureHierarchy, PermissionType, Roles } from "generated/prisma";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import type { LectureHierarchyExtended } from "../LecturePageWrapper";
import LectureForms from "../../LectureForms";
import FormUpdate from "~/app/_components/Forms/FormUpdate";
import InputText from "~/app/_components/UI/InputText";
import InputCheckbox from "~/app/_components/UI/InputCheckbox";
import ToggleButton from "~/app/_components/UI/ToggleButton";
import InputTextArea from "~/app/_components/UI/InputTextArea";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

interface LectureParentContainerProps {
  lecture: LectureHierarchyExtended;
  editmode: boolean;
  userId: string;
  userRole: Roles;
}

function LectureParentContainer({
  lecture,
  editmode,
  userId,
  userRole,
}: LectureParentContainerProps) {
  const updateLecture = api.lectures.updateLecture.useMutation({
    onSuccess: () => {},
    onError: (error) => {
      toast.error(error.message);
    },
  });

  let permissionType: PermissionType | undefined;

  if (userRole === "ADMIN") {
    permissionType = "ADMIN";
  } else if (lecture.createdById === userId) {
    permissionType = "CREATOR";
  } else {
    permissionType = lecture.permissions[0]?.type;
  }

  return (
    <div>
      <Link
        href={`lectures/${lecture.id}`}
        className={`group bg-accent relative flex h-[10vw] w-[10vw] flex-col items-center justify-end overflow-hidden shadow-md transition-transform hover:scale-101 ${editmode ? "rounded-t-lg" : "rounded-lg"}`}
      >
        {lecture.image ? (
          <Image
            src={`/lectures/${lecture.image}`}
            alt={lecture.name ?? ""}
            fill
            className="object-cover"
            sizes="10vw"
          />
        ) : (
          <div className="dark:bg-accent-dark bg-accent-light absolute inset-0" />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/20 to-transparent"></div>

        <span className="relative z-10 w-full p-3 text-center text-sm font-medium text-white">
          {lecture.name}
        </span>
      </Link>
      {editmode && (
        <div
          className={`flex h-12 w-full items-center justify-center overflow-hidden rounded-b-lg bg-black text-white transition-all dark:bg-black/70`} //  ${isHovering ? "h-12" : "h-0"}
        >
          {permissionType === "CREATOR" || userRole === "ADMIN" ? (
            <FormUpdate
              apiUpdate={(formData) => {
                updateLecture.mutate({
                  lectureId: lecture.id,
                  description: formData["description"] as string,
                  image: formData["image"] as string,
                  name: formData["name"] as string,
                  isPublic: !!formData["isPublic"] as boolean,
                });
              }}
              buttonTitle="Editovat"
            >
              <InputText
                dbKey="name"
                defaultValue={{ editDefault: lecture.name }}
                minChars={3}
                label="Název"
                required={true}
                className="text-text dark:text-text-dark-mode col-span-5"
              />
              <InputText
                dbKey="image"
                defaultValue={{ editDefault: lecture.image ?? undefined }}
                label="Obrázek"
                className="text-text dark:text-text-dark-mode col-span-5"
              />
              <InputCheckbox
                dbKey="isPublic"
                label="Je lekce veřejná?"
                initialValue={lecture.isPublic}
                className="text-text dark:text-text-dark-mode col-span-2 my-auto"
              />
              <InputTextArea
                dbKey="description"
                defaultValue={{
                  editDefault: lecture.description ?? undefined,
                }}
                label="Popis lekce"
                className="text-text dark:text-text-dark-mode col-span-12 mb-8 h-96"
              />
            </FormUpdate>
          ) : (
            <span className="text-gray-400 line-through">Editovat</span>
          )}
        </div>
      )}
    </div>
  );
}

export default LectureParentContainer;

"use client";

import React, { useState } from "react";
import GridLayout from "../../Layout/GridLayout";
import type { LectureHierarchy, PermissionType, Roles } from "generated/prisma";
import LectureParentContainer from "./UI/LectureParentContainer";
import InputText from "../../UI/InputText";
import ToggleButton from "../../UI/ToggleButton";
import { MdEdit } from "react-icons/md";

export interface LectureHierarchyExtended extends LectureHierarchy {
  subscriptions: { userId: string; lectureId: number }[];
  permissions: { userId: string; lectureId: number; type: PermissionType }[];
  _count: { subscriptions: number };
}

interface LecturePageWrapperProps {
  lectures: LectureHierarchyExtended[];
  userRole: Roles;
  userId: string;
}

function LecturePageWrapper(props: LecturePageWrapperProps) {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [editMode, setEditMode] = useState(false);

  const filteredLectures = props.lectures.filter((lecture) => {
    const matchesSearch = lecture.name
      ?.toLowerCase()
      .includes(searchPrompt.toLowerCase());
    if (!matchesSearch) return false;

    if (editMode) {
      const isOwner = lecture.createdById === props.userId;
      const hasPermission = lecture.permissions.some(
        (p) => p.userId === props.userId,
      );
      return isOwner || hasPermission;
    }

    return true;
  });

  const subscribed = filteredLectures.filter((l) => l.subscriptions.length > 0);
  const others = filteredLectures.filter((l) => l.subscriptions.length === 0);

  return (
    <GridLayout className="p-8">
      <GridLayout className="col-span-10 col-start-2 w-full">
        <InputText
          dbKey=""
          onChange={(e: string) => setSearchPrompt(e)}
          placeholder="Hledat..."
          className="col-span-6 w-full"
        />

        {(props.userRole === "ADMIN" || props.userRole === "OWNER") && (
          <div className="col-span-6 my-auto flex items-center justify-end">
            <ToggleButton
              title="Editační mód"
              icon={<MdEdit size={18} />}
              actionActive={() => setEditMode(true)}
              actionDisabled={() => setEditMode(false)}
            />
          </div>
        )}
      </GridLayout>

      <div className="col-span-10 col-start-2 mt-8">
        {subscribed.length > 0 && (
          <div className="mb-12 flex flex-col">
            <h2 className="mb-4 text-xl font-bold">Odebírané</h2>
            <div className="grid w-full grid-cols-5 justify-items-center gap-6">
              {subscribed.map((lecture) => (
                <LectureParentContainer
                  key={lecture.id}
                  lecture={lecture}
                  editmode={editMode}
                  userId={props.userId}
                  userRole={props.userRole}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="mb-4 text-xl font-bold">Všechny</h2>
          <div className="grid w-full grid-cols-5 justify-items-center gap-6">
            {others.map((lecture) => (
              <LectureParentContainer
                key={lecture.id}
                lecture={lecture}
                editmode={editMode}
                userId={props.userId}
                userRole={props.userRole}
              />
            ))}
          </div>
        </div>
      </div>
    </GridLayout>
  );
}

export default LecturePageWrapper;

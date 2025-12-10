"use client";

import React from "react";
import FormCreate from "../Forms/FormCreate";
import InputText from "../UI/InputText";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

function LectureInitButton() {
  const createLecture = api.lectures.createLecture.useMutation({
    onSuccess: () => {
      toast.success("První lekcu úspěšně vytvořena.");
      window.location.reload();
    },
  });

  return (
    <FormCreate
      apiCreate={(formData) => {
        createLecture.mutate({
          name: formData.name as string,
          lectureId: formData.parentId ? Number(formData.parentId) : null,
        });
      }}
      buttonTitle="Vytvořit první lekci"
    >
      <div className="col-span-4 flex gap-10">
        <InputText
          dbKey="name"
          focus
          required
          minChars={3}
          label="Název"
        ></InputText>
      </div>
    </FormCreate>
  );
}

export default LectureInitButton;

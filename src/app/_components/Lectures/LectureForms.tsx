import React from "react";
import InputText from "../UI/InputText";
import InputSelect from "../UI/InputSelect";
import FormManager from "../Forms/FormManager";
import { api } from "~/trpc/react";
import { createOptions } from "~/server/utils/lecture";

interface LectureFormsProps {
  id: number;
  name: string;
}

function LectureForms(props: LectureFormsProps) {
  const parentSelect = api.lectures.getLectureHierarchies.useQuery();
  const parentHierarchy = api.lectures.getParent.useQuery(props.id);

  const createLectureMutation = api.lectures.createLecture.useMutation({
    onSuccess: () => {
      console.log(
        "Vytvořeno tu dej nejake okno lol nejaky succes mozna pouzit TOUST? :)))):",
      );
      window.location.reload();
    },
  });

  const updateLectureMutation = api.lectures.updateLecture.useMutation({
    onSuccess: () => {
      window.location.reload();
    },
  });

  const deleteLectureMutation = api.lectures.deleteLecture.useMutation({
    onSuccess: () => {
      window.location.reload();
    },
  });
  return (
    <FormManager
      apiCreate={(formData) => {
        createLectureMutation.mutate({
          name: formData.name as string,
          lectureId: formData.parentId ? Number(formData.parentId) : null,
        });
      }}
      apiUpdate={(formData) => {
        updateLectureMutation.mutate({
          id: props.id,
          name: formData.name as string,
          parentId: formData.parentId ? Number(formData.parentId) : null,
        });
      }}
      apiDelete={() => {
        deleteLectureMutation.mutate(props.id);
      }}
    >
      <div className="flex w-[50vw] gap-10">
        {!parentSelect.isLoading &&
          parentSelect.data &&
          !parentHierarchy.isLoading &&
          parentHierarchy.data && (
            <>
              <InputText
                dbKey="name"
                focus
                required
                minChars={3}
                defaultValue={{
                  editDefault: props.name ?? "",
                }}
                label="Název"
              ></InputText>
              <InputSelect
                name="parentId"
                label="Nadřazený"
                hasNull={true}
                defaultValue={{
                  createDefault: { value: String(props.id), label: props.name },
                  editDefault: {
                    label: parentHierarchy.data?.name
                      ? parentHierarchy.data?.name
                      : "",
                    value: parentHierarchy.data?.HierarchyParentId
                      ? String(parentHierarchy.data?.HierarchyParentId)
                      : "",
                  },
                }}
                options={createOptions(parentSelect.data, "id", "name")}
              />
            </>
          )}
      </div>
    </FormManager>
  );
}

export default LectureForms;

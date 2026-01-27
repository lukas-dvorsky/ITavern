import type { LectureHierarchy } from "generated/prisma";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import GridLayout from "~/app/_components/Layout/GridLayout";
import ProgressBar from "~/app/_components/UI/ProgressBar";
import { api } from "~/trpc/react";
import LectureChildStatistics from "../LectureChildStatistics";
import Button from "~/app/_components/UI/Button";
import Modal, { type ModalHandle } from "~/app/_components/Modals/Modal";
import InputText from "~/app/_components/UI/InputText";
import toast from "react-hot-toast";

interface ILectureChild {
  lecture: LectureHierarchy;
  createdBy: string | null;
  updatedBy: string | null;
  maxLectures: number;
  completedLectures: number;
  turnoffAnimations?: boolean;
}

function LectureChild(props: ILectureChild) {
  const modalRef = useRef<ModalHandle>(null);
  const [deleteInput, setDeleteInput] = useState<string>("");
  const deleteLectureProgression =
    api.lectures.deleteLectureProgression.useMutation({
      onSuccess: () => {
        modalRef.current?.close();
        toast.success("Progres byl úspěšně smazán.");
      },
      onError: () => {
        toast.success("Něco se nepovedlo.");
      },
    });

  const imageSrc =
    props.lecture.image && props.lecture.image.trim() !== ""
      ? props.lecture.image
      : "/lectures/lectureDefault.png";

  let max = props.maxLectures;
  let count = props.completedLectures;

  if (props.maxLectures === 0) {
    const isLectureCompleted = api.lectures.getLectureCompletionStatus.useQuery(
      props.lecture.id,
    );

    if (isLectureCompleted.data?.lectureCompleted) {
      max = 1;
      count = 1;
    } else {
      max = 1;
      count = 0;
    }
  }

  return (
    <div
      className={`dark:bg-background-dark-card/60 flex w-full gap-8 rounded-md px-6 py-8 shadow-md transition-transform duration-200 ${props.turnoffAnimations ? "" : "hover:scale-[1.005]"}`}
    >
      <Image src={imageSrc} alt={props.lecture.name} width={256} height={192} />
      {/* 256, 192 */}
      <GridLayout>
        <div className="col-span-8 flex flex-col">
          <Link
            href={`/lectures/${props.lecture.id}`}
            className="text-4xl font-bold hover:underline"
          >
            {props.lecture.name}
          </Link>
          <span>{props.lecture.description}</span>
        </div>
        <ProgressBar
          className="col-span-12 mt-auto w-full"
          hoverText=" "
          max={max}
          count={count}
          modalSettings={{
            modalTitle: "Statistiky lekce a jejích podlekcí",
            modalContent: (
              <GridLayout className="col-span-12">
                <GridLayout className="col-span-12">
                  <span className="dark:text-text-soft col-span-6 text-xs">
                    Vytvořil: {props.createdBy},{" "}
                    {new Date(props.lecture.createdAt).toDateString()}
                  </span>
                  <span className="dark:text-text-soft col-span-6 text-right text-xs">
                    Poslední aktualizace: {props.updatedBy},{" "}
                    {new Date(props.lecture.updatedAt).toDateString()}
                  </span>
                </GridLayout>
                <div className="col-span-10">
                  <LectureChildStatistics lectureId={props.lecture.id} />
                </div>
                <div className="col-span-2">
                  <Button
                    className="dark:bg-primary"
                    click={() => modalRef.current?.open()}
                  >
                    Smazat progres
                  </Button>
                  <Modal ref={modalRef} title="Smazat progres">
                    <div className="col-span-12 my-12 flex justify-between px-8">
                      <div className="flex w-1/4 flex-col gap-4">
                        <InputText
                          dbKey=""
                          required
                          focus
                          label="Zadejte jméno lekce"
                          onChange={(e) => {
                            setDeleteInput(e);
                          }}
                          className="w-1/4"
                        ></InputText>
                        <span className="text-sm">
                          Nápověda: {props.lecture.name}
                        </span>
                      </div>
                      <Button
                        className={`text-text-dark-mode-soft ${deleteInput.toLocaleLowerCase() !== props.lecture.name.toLocaleLowerCase() ? "dark:bg-background-dark-subtle" : "bg-red-500"} `}
                        click={() => {
                          if (
                            deleteInput.toLocaleLowerCase() !==
                            props.lecture.name.toLocaleLowerCase()
                          )
                            return;

                          deleteLectureProgression.mutate(props.lecture.id);
                        }}
                      >
                        Smazat progres
                      </Button>
                    </div>
                  </Modal>
                </div>
              </GridLayout>
            ),
          }}
        />
      </GridLayout>
    </div>
  );
}

export default LectureChild;

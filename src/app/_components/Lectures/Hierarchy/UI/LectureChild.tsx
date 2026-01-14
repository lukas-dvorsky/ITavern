import type { LectureHierarchy } from "generated/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridLayout from "~/app/_components/Layout/GridLayout";
import ProgressBar from "~/app/_components/UI/ProgressBar";
import { api } from "~/trpc/react";

interface ILectureChild {
  lecture: LectureHierarchy;
  createdBy: string | null;
  updatedBy: string | null;
  maxLectures: number;
  completedLectures: number;
}

function LectureChild(props: ILectureChild) {
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

    if (isLectureCompleted.data) {
      max = 1;
      count = 1;
    } else {
      max = 1;
      count = 0;
    }
  }

  return (
    <div className="flex w-full gap-8">
      <Image src={imageSrc} alt={props.lecture.name} width={256} height={192} />
      <GridLayout>
        <div className="col-span-8 flex flex-col">
          <Link
            href={`/lectures/${props.lecture.id}`}
            className="text-4xl font-bold hover:underline"
          >
            {props.lecture.name}
          </Link>
          <span className="dark:text-text-soft text-xs">
            Vytvořil: {props.createdBy},{" "}
            {new Date(props.lecture.createdAt).toDateString()}
          </span>
          <span className="dark:text-text-soft text-xs">
            Poslední aktualizace: {props.updatedBy},{" "}
            {new Date(props.lecture.updatedAt).toDateString()}
          </span>
          <span>{props.lecture.description}</span>
        </div>
        <ProgressBar
          className="col-span-12 mt-auto w-full"
          max={max}
          count={count}
        />
      </GridLayout>
    </div>
  );
}

export default LectureChild;

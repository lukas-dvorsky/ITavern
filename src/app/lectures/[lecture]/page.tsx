import { api } from "~/trpc/server";
import { requireLoggedIn } from "~/server/utils/auth";
import MarkdownList from "~/app/_components/Lectures/Markdown/MarkdownList";
import GridLayout from "~/app/_components/Layout/GridLayout";
import Error from "~/app/_components/UI/Error";
import LectureChildren from "~/app/_components/Lectures/Hierarchy/LectureChildren";

interface PageProps {
  params: Promise<{
    lecture: string;
  }>;
}

export default async function LecturePage({ params }: PageProps) {
  const session = await requireLoggedIn();

  const { lecture: lectureParam } = await params;
  const lectureId = Number(lectureParam);

  let lecture;
  try {
    lecture = await api.lectures.getLecture(lectureId);
  } catch (err: any) {
    return <Error err={err} />;
  }

  return (
    <GridLayout>
      <h1 className="col-span-6 col-start-4 my-12 text-center text-6xl font-bold">
        {lecture.name}
      </h1>

      <span className="col-span-8 col-start-3 text-center text-lg">
        {lecture.description}
      </span>

      <div className="col-span-10 col-start-2 mb-96">
        <MarkdownList
          createdBy={lecture.createdById}
          userId={session.user.id}
          isLecturePublic={lecture.isPublic}
          lectureId={lectureId}
        />
        <LectureChildren
          lectureId={lecture.id}
          className="col-span-6 mx-auto mt-36 flex w-9/12 flex-col gap-16"
        />
      </div>
    </GridLayout>
  );
}

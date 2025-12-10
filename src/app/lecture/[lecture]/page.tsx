import { api } from "~/trpc/server";
import { requireLoggedIn } from "~/server/utils/auth";
import MarkdownList from "~/app/_components/Lectures/Markdown/MarkdownList";
import GridLayout from "~/app/_components/Layout/GridLayout";

interface PageProps {
  params: Promise<{
    lecture: string;
  }>;
}

export default async function LecturePage({ params }: PageProps) {
  const session = await requireLoggedIn();

  const { lecture: lectureParam } = await params;
  const lectureId = Number(lectureParam);

  if (isNaN(lectureId)) {
    return <span>Neplatné ID předmětu</span>;
  }

  let lecture;
  try {
    lecture = await api.lectures.getLecture(lectureId);
  } catch (err) {
    console.error(err);
    return <span>Chyba při načítání předmětu</span>;
  }

  if (!lecture) {
    return <span>Předmět nenalezen</span>;
  }

  if (!lecture.isPublic && lecture.createdById !== session.user.id) {
    return <span>Nemáte práva na prohlížení této lekce</span>;
  }

  return (
    <GridLayout>
      <h1 className="col-span-6 col-start-4 my-12 text-center text-6xl font-bold">
        {lecture.name}
      </h1>

      <div className="col-span-10 col-start-2">
        <MarkdownList
          createdBy={lecture.createdById}
          userId={session.user.id}
          isLecturePublic={lecture.isPublic}
          lectureId={lectureId}
          isAdmin={session.user.role === "ADMIN"}
        />
      </div>
    </GridLayout>
  );
}

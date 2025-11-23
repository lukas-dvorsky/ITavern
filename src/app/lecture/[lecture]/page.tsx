import { api } from "~/trpc/server";
import { requireLoggedIn } from "~/server/utils/auth";
import MarkdownList from "~/app/_components/Lectures/Markdown/MarkdownList";

interface PageProps {
  params: { lecture: string };
}

export default async function LecturePage({ params }: PageProps) {
  const session = await requireLoggedIn();
  const lectureId = Number(params.lecture);

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

  const orderArray: number[] = lecture.order ? JSON.parse(lecture.order) : [];

  let markdownBlocks;
  try {
    markdownBlocks = await api.lectures.getMarkdownBlocksByOrder(
      JSON.stringify(orderArray),
    );
  } catch (err) {
    console.error(err);
    return <span>Chyba při načítání markdownu</span>;
  }

  return (
    <main className="bg-background flex min-h-screen flex-col items-center gap-6">
      <h1 className="my-12 text-6xl font-bold">{lecture.name}</h1>

      <div className="w-4/5">
        <MarkdownList
          blocks={markdownBlocks}
          lectureId={lectureId}
          isAdmin={session.user.role === "ADMIN"}
        />
      </div>
    </main>
  );
}

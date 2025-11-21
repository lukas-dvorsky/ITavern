import { api } from "~/trpc/server";
import MarkdownViewer from "~/app/_components/Lectures/Markdown/MarkdownViewer";
import { requireLoggedIn } from "~/server/utils/auth";
import Button from "~/app/_components/Button";
import LectureEditOptions from "~/app/_components/Lectures/LectureEditOptions";
import MarkdownEditor from "~/app/_components/Lectures/Markdown/MarkdownEditor";

interface PageProps {
  params: { lecture: string };
}

export default async function LectureEditPage({ params }: PageProps) {
  const session = await requireLoggedIn(); // ověření přihlášení
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

  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <h1 className="shrink-0 p-4 text-4xl font-bold">{lecture.name}</h1>

      <div className="flex-grow overflow-hidden">
        <MarkdownEditor
          id={String(lectureId)}
          markdown={lecture.markdown ?? ""}
        />
      </div>
    </main>
  );
}

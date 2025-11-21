import { api } from "~/trpc/server";
import MarkdownViewer from "~/app/_components/Lectures/Markdown/MarkdownViewer";
import { requireLoggedIn } from "~/server/utils/auth";
import Link from "next/link";
import LinkButton from "~/app/_components/LinkButton";

interface PageProps {
  params: { lecture: string };
}

export default async function LecturePage({ params }: PageProps) {
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
    <main className="flex w-screen flex-col items-center justify-center gap-6">
      <h1 className="my-12 text-6xl font-bold">{lecture.name}</h1>
      <div className="w-4/5">
        <MarkdownViewer content={lecture.markdown || ""} />
      </div>
      <LinkButton title="Editovat" link={`/lectureEdit/${lectureId}`} />
    </main>
  );
}

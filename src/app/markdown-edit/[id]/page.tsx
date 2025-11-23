import { api } from "~/trpc/server";
import MarkdownViewer from "~/app/_components/Lectures/Markdown/MarkdownViewer";
import { requireLoggedIn } from "~/server/utils/auth";
import Button from "~/app/_components/Button";
import LectureEditOptions from "~/app/_components/Lectures/LectureEditOptions";
import MarkdownEditor from "~/app/_components/Lectures/Markdown/MarkdownEditor";

interface PageProps {
  params: { id: string };
}

export default async function MarkdownEditPage({ params }: PageProps) {
  const session = await requireLoggedIn();
  const mdId = Number(params.id);

  if (session.user.role !== "ADMIN") {
    return <span>Editovat mohou jen uživatele s přiřazenými právy!</span>;
  }

  if (isNaN(mdId)) {
    return <span>Neplatné ID předmětu</span>;
  }

  let markdownBlock;
  try {
    markdownBlock = await api.lectures.getMarkdownBlock(mdId);
  } catch (err) {
    console.error(err);
    return <span>Chyba při načítání předmětu</span>;
  }

  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <div className="grow overflow-hidden">
        <MarkdownEditor
          key={markdownBlock?.id}
          id={String(mdId)}
          userId={session.user.id}
          name={markdownBlock?.name ?? ""}
          markdown={markdownBlock?.content || ""}
        />
      </div>
    </main>
  );
}

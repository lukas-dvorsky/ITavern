import { requireLoggedIn } from "~/server/utils/auth";
import LectureNavigator from "./_components/Lectures/LectureNavigator";
import Link from "next/link";

export default async function Home() {
  const session = await requireLoggedIn();
  return (
    <main className="bg-background text-text flex min-h-screen flex-col items-center">
      <div className="bg-background-card mt-36 max-h-screen w-2/3 flex-col">
        <LectureNavigator
          userRole={session.user.role}
          userId={session.user.id}
        />
      </div>

      <span>prihlaseny jako: {session.user.name}</span>
      <Link href="/api/auth/signout">SignOut</Link>
    </main>
  );
}

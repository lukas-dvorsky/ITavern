import Link from "next/link";
import { auth } from "~/server/auth";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/react";
import Button from "./_components/Button";
import LectureNavigator from "./_components/Lectures/LectureNavigator";

export default async function Home() {
  const session = await requireLoggedIn();

  return (
    <main className="flex min-h-screen flex-col items-center bg-linear-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="mt-36 max-h-screen w-2/3 flex-col">
        <LectureNavigator userRole={session.user.role} />
      </div>

      <span>prihlaseny jako: {session.user.name}</span>
      <a href="/api/auth/signout">SignOut</a>
    </main>
  );
}

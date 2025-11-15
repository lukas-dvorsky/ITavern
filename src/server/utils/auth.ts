// server-side
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

/**
 * Funkce volana pri inicializaci stranky, pokud uzivatel neni prihlaseny presmeruje ho to na login page.
 * @returns session prihlaseneho uzivatele.
 */
export async function requireLoggedIn() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return session;
}

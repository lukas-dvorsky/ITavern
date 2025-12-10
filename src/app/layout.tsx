import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/UI/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { auth } from "~/server/auth";

export const metadata: Metadata = {
  title: "ITavern",
  description: "ITavern by Lukas",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const setInitialTheme = `
  (function() {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'DARK';

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'LIGHT') {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html lang="en" className={`${geist.variable} custom-scrollbar`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="bg-background dark:bg-background-dark-subtle dark:text-text-dark-mode">
        <TRPCReactProvider>
          <Navbar pagesWithoutBackArrow={["/"]} session={session} />
          <div className="pt-16 pl-8">{children}</div>
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}

import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/UI/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} custom-scrollbar dark`}>
      <body className="bg-background dark:bg-background-dark-subtle dark:text-text-dark-mode">
        <Navbar pagesWithoutBackArrow={["/"]} />
        <div className="pt-16 pl-8">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

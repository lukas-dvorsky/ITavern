// app/_components/UI/Navbar/Navbar.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaLeftLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdDarkMode, MdLightMode, MdSpaceDashboard } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import NavbarSideMenu from "./Menu/NavbarSideMenu";
import type { Session } from "next-auth";
import Link from "next/link";
import ToggleButton from "../ToggleButton";
import { api } from "~/trpc/react";
import { Themes } from "generated/prisma";

interface NavbarProps {
  pagesWithoutBackArrow?: string[];

  session: Session | null;
}

const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === Themes.DARK;
  }
  return false;
};

function Navbar(props: NavbarProps) {
  const { data: userSettings, refetch: refetchSettings } =
    api.user.getUserSettings.useQuery();
  const setThemeMutation = api.user.setTheme.useMutation();

  const router = useRouter();
  const pathname = usePathname();

  const [menuActive, setMenuActive] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme());
  const [loadingTheme, setLoadingTheme] = useState(false);

  useEffect(() => {
    if (userSettings) {
      const dark = userSettings.theme === Themes.DARK;
      setIsDark(dark);
      localStorage.setItem("theme", userSettings.theme);
    }
  }, [userSettings]);

  const toggleTheme = async () => {
    if (loadingTheme) return;
    setLoadingTheme(true);

    const newTheme = isDark ? Themes.LIGHT : Themes.DARK;

    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);

    localStorage.setItem("theme", newTheme);

    try {
      await setThemeMutation.mutateAsync(newTheme);
      await refetchSettings();
    } finally {
      setLoadingTheme(false);
    }
  };

  return (
    <nav className="bg-background-dark-subtle text-text-dark-mode dark:bg-background-dark fixed top-0 z-51 grid h-16 w-screen grid-cols-12 items-center shadow-sm">
      <div
        className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200"
        onClick={() => setMenuActive(!menuActive)}
      >
        <TiThMenu size={24} />
      </div>

      {!props.pagesWithoutBackArrow?.includes(pathname) && (
        <div
          className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center"
          onClick={() => router.back()}
        >
          <FaLeftLong size={24} />
        </div>
      )}

      <div className="col-span-2 col-start-11 flex h-full justify-around gap-0">
        <ToggleButton
          className="w-full border-none bg-transparent dark:bg-transparent"
          defaultActive={!isDark}
          actionActive={toggleTheme}
          actionDisabled={toggleTheme}
          iconActive={<MdLightMode size={24} />}
          iconDisabled={<MdDarkMode size={24} />}
          disabled={loadingTheme}
        />
        {props.session?.user.role === "ADMIN" && (
          <Link
            href={""}
            className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <MdSpaceDashboard size={24} />
          </Link>
        )}
        <div className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200">
          <IoMdSettings size={24} />
        </div>
        <NavbarSideMenu active={menuActive} />
      </div>
    </nav>
  );
}

export default Navbar;

"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaLeftLong } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import NavbarSideMenu from "./Menu/NavbarSideMenu";

interface NavbarProps {
  pagesWithoutBackArrow?: string[];
}

function Navbar(props: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="bg-background-dark-subtle text-text-dark-mode dark:bg-background-dark fixed top-0 z-51 grid h-16 w-screen grid-cols-12 items-center shadow-sm">
      <div
        className={`hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200`}
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

      <div className="col-start-12 flex h-full justify-around">
        <div className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200">
          <MdSpaceDashboard size={24} />
        </div>
        <div className="hover:bg-primary dark:hover:bg-primary-dark hover:text-background flex h-full w-full cursor-pointer items-center justify-center transition-colors duration-200">
          <IoMdSettings size={24} />
        </div>
        <NavbarSideMenu active={menuActive} />
      </div>
    </nav>
  );
}

export default Navbar;

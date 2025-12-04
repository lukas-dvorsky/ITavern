import React from "react";
import MenuButton from "./MenuButton";
import { FaBook } from "react-icons/fa6";

interface NavbarSideMenuProps {
  active: boolean;
}

function NavbarSideMenu(props: NavbarSideMenuProps) {
  return (
    <div
      className={`bg-background-dark-subtle dark:bg-background-dark transition-width fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] duration-300 ease-in-out ${props.active ? "w-[16.66666vw]" : "w-16"}`}
    >
      <MenuButton url="/" text="Lekce" expanded={props.active}>
        <FaBook />
      </MenuButton>
    </div>
  );
}

export default NavbarSideMenu;

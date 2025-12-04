import { useRouter } from "next/navigation";
import React from "react";

interface MenuButtonProps {
  url: string;
  text: string;
  children: React.ReactNode;
  expanded: boolean;
}

function MenuButton(props: MenuButtonProps) {
  const router = useRouter();
  return (
    <div
      className={`hover:bg-primary dark:hover:bg-primary-dark text-text-dark-mode-soft hover:text-text-dark-mode flex h-16 w-full cursor-pointer items-center justify-start gap-4 px-4 text-xl transition-colors duration-200`}
      onClick={() => router.push(props.url)}
    >
      <div className="flex items-center justify-center">{props.children}</div>
      <span
        className={`transition-opacity select-none ${props.expanded ? "opacity-100" : "opacity-0"}`}
      >
        {props.text}
      </span>
    </div>
  );
}

export default MenuButton;

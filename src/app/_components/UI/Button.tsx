"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  redirectTo?: string;
  className?: string;
  children: React.ReactNode;
  click?: (...args: unknown[]) => unknown;
}

function Button(props: ButtonProps) {
  const router = useRouter();

  return (
    <button
      className={`hover: cursor-pointer px-8 py-4 ${props.className ?? ""}`}
      onClick={(e) => {
        e.stopPropagation();
        props.click?.(e);

        if (!props.redirectTo) return;
        router.push(props.redirectTo);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;

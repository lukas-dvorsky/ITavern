"use client";

import React, { useState } from "react";

interface ToggleButtonProps {
  title?: string;
  icon?: React.ReactNode;
  actionActive: (...args: unknown[]) => unknown;
  actionDisabled: (...args: unknown[]) => unknown;
  defaultActive?: boolean;
  className?: string;
}

function ToggleButton(props: ToggleButtonProps) {
  const [active, setActive] = useState(props.defaultActive ?? false);

  return (
    <div
      className={`${props.className} flex items-center justify-center gap-4 rounded-sm border px-2 py-1 ${active ? "bg-primary-light text-background" : "border-gray-400"}`}
      onClick={() => {
        if (active) {
          props.actionDisabled();
        } else {
          props.actionActive();
        }
        setActive(!active);
      }}
    >
      {props.icon}
      <span className="select-none">{props.title}</span>
    </div>
  );
}

export default ToggleButton;

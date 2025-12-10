"use client";

import React, { useState } from "react";

interface ToggleButtonProps {
  title?: string;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  iconDisabled?: React.ReactNode;
  actionActive: (...args: unknown[]) => unknown;
  actionDisabled: (...args: unknown[]) => unknown;
  defaultActive?: boolean;
  className?: string;
  disabled?: boolean;
}

function ToggleButton(props: ToggleButtonProps) {
  const [active, setActive] = useState(props.defaultActive ?? false);

  return (
    <div
      className={`${props.className} flex items-center justify-center gap-4 rounded-sm border px-2 py-1 ${active ? "bg-primary-light dark:bg-primary-dark text-text-dark-mode dark:border-primary-dark" : "bg-background-card dark:border-background-dark dark:bg-background-dark-card border-gray-400"}`}
      onClick={() => {
        if (props.disabled) return;
        if (active) {
          props.actionDisabled();
        } else {
          props.actionActive();
        }
        setActive(!active);
      }}
    >
      {props.icon}
      {active && props.iconActive}
      {!active && props.iconDisabled}
      <span className="dark:text-text-dark-mode select-none">
        {props.title}
      </span>
    </div>
  );
}

export default ToggleButton;

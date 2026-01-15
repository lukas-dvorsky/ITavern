"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";

export interface ToggleButtonHandle {
  setActive: (state: boolean) => void;
}

interface ToggleButtonProps {
  title?: string;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  iconDisabled?: React.ReactNode;
  actionActive: (...args: unknown[]) => unknown;
  actionDisabled: (...args: unknown[]) => unknown;
  defaultActive?: boolean;
  active?: boolean;
  onToggle?: (newState: boolean) => void;
  className?: string;
  disabled?: boolean;
}

const ToggleButton = forwardRef<ToggleButtonHandle, ToggleButtonProps>(
  (props, ref) => {
    const [internalActive, setInternalActive] = useState(
      props.defaultActive ?? false,
    );

    const isActive = props.active !== undefined ? props.active : internalActive;

    useImperativeHandle(ref, () => ({
      setActive: (state: boolean) => {
        if (props.active === undefined) {
          setInternalActive(state);
        } else {
          props.onToggle?.(state);
        }
      },
    }));

    const handleClick = () => {
      if (props.disabled) return;

      if (isActive) props.actionDisabled();
      else props.actionActive();

      props.onToggle?.(!isActive);

      if (props.active === undefined) {
        setInternalActive(!internalActive);
      }
    };

    return (
      <div
        className={`${props.className} flex items-center justify-center gap-4 rounded-sm border px-2 py-1 ${
          isActive
            ? "bg-primary-light dark:bg-primary-dark text-text-dark-mode dark:border-primary-dark"
            : "bg-background-card dark:border-background-dark dark:bg-background-dark-card border-gray-400"
        }`}
        onClick={handleClick}
      >
        {props.icon}
        {isActive && props.iconActive}
        {!isActive && props.iconDisabled}
        <span className="dark:text-text-dark-mode select-none">
          {props.title}
        </span>
      </div>
    );
  },
);

export default ToggleButton;

"use client";

import React, { useId, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

interface InputCheckboxProps {
  dbKey?: string;
  label?: string;
  initialValue?: boolean;
  required?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
  disabled?: boolean;
  disabledMessage?: string;
}

function InputCheckbox(props: InputCheckboxProps) {
  const id = useId();
  const [checked, setChecked] = useState(props.initialValue ?? false);

  return (
    <div className={`flex w-full flex-col ${props.className ?? ""}`}>
      <div className="flex items-center gap-2">
        <input
          id={id}
          name={props.dbKey}
          type="checkbox"
          checked={checked}
          required={props.required}
          readOnly={props.disabled}
          onChange={(e) => {
            if (props.disabled === true) {
              toast.error(props.disabledMessage ?? "Chyba");
              return;
            }
            setChecked(e.target.checked);
            props.onChange?.(e.target.checked);
          }}
          className="sr-only"
        />

        <label
          htmlFor={id}
          className={`relative flex h-5 w-5 cursor-pointer items-center justify-center rounded border-2 transition-all duration-150 ${
            checked
              ? "border-gray-400 bg-gray-400 shadow-md"
              : "border-gray-400 bg-white"
          } `}
        >
          {checked && <FaCheck className="text-white" size={12} />}
        </label>

        <label
          htmlFor={id}
          className="dark:text-text-dark-mode cursor-pointer text-sm text-gray-700 select-none"
        >
          {props.label ?? ""}
        </label>
      </div>
    </div>
  );
}

export default InputCheckbox;

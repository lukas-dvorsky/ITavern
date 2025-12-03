"use client";
import React, { useEffect, useId, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface InputCheckboxProps {
  dbKey?: string;
  label?: string;
  initialValue?: boolean;
  defaultValue?: {
    createDefault?: boolean;
    editDefault?: boolean;
  };
  required?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

function InputCheckbox(props: InputCheckboxProps) {
  const [checkValue, setCheckValue] = useState<boolean>(
    props.initialValue ?? false,
  );
  const [errorMessage, setErrorMessage] = useState("");
  const distinctId = useId();

  useEffect(() => {
    const inputEl = document.getElementById(distinctId);
    if (!inputEl) return;

    const closestForm = inputEl.closest("form");
    const defaults = props.defaultValue;

    if (props.initialValue !== undefined) {
      setCheckValue(props.initialValue);
      return;
    }

    if (defaults && closestForm instanceof HTMLFormElement) {
      const formType = closestForm.dataset.formType;

      if (formType === "create" && defaults.createDefault !== undefined) {
        setCheckValue(defaults.createDefault);
      } else if (formType === "update" && defaults.editDefault !== undefined) {
        setCheckValue(defaults.editDefault);
      }
    } else if (defaults?.createDefault !== undefined) {
      setCheckValue(defaults.createDefault);
    }
  }, [props.initialValue, props.defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setCheckValue(newValue);
    setErrorMessage("");
    props.onChange?.(newValue);
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (props.required && !checkValue) {
      setErrorMessage("Toto pole je povinné.");
    }
  };

  return (
    <div className={`flex w-full flex-col ${props.className}`}>
      <div className="flex cursor-pointer items-center gap-2">
        <input
          id={distinctId}
          name={props.dbKey}
          type="checkbox"
          required={props.required}
          checked={checkValue}
          onChange={handleChange}
          onInvalid={handleInvalid}
          className="peer sr-only"
        />

        <label
          htmlFor={distinctId}
          className={`relative flex h-5 w-5 cursor-pointer items-center justify-center rounded border-2 transition-all duration-150 select-none ${
            checkValue
              ? "border-gray-400 bg-gray-400 shadow-md"
              : errorMessage
                ? "border-danger bg-white"
                : "hover:border-primary-light border-gray-400 bg-white"
          }`}
        >
          {checkValue && <FaCheck color="white" />}
        </label>

        <label
          htmlFor={distinctId}
          className="cursor-pointer text-sm text-gray-700 select-none"
        >
          {props.label ?? "Zaškrtávací pole"}
        </label>
      </div>

      <span className="text text-danger mt-1 block h-4 text-sm">
        {errorMessage}
      </span>
    </div>
  );
}

export default InputCheckbox;

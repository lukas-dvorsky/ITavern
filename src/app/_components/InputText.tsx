"use client";
import React, { useEffect, useId, useState } from "react";

interface InputTextProps {
  dbKey: string;
  minChars?: number;
  label?: string;
  placeholder?: string;
  defaultValue?: {
    createDefault?: string;
    editDefault?: string;
  };
  focus?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

function InputText(props: InputTextProps) {
  const [focused, setFocused] = useState(props.focus ?? false);
  const [textValue, setTextValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const distinctId = useId();

  let formType = null;

  useEffect(() => {
    const inputEl = document.getElementById(distinctId);
    if (inputEl) {
      const closestForm = inputEl.closest("form") as HTMLFormElement | null;
      if (closestForm) {
        formType = closestForm.dataset.formType;

        if (formType === "create") {
          setTextValue((props.defaultValue?.createDefault as string) ?? "");
        } else if (formType === "update") {
          setTextValue((props.defaultValue?.editDefault as string) ?? "");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (props.focus) {
      const input = document.getElementById(distinctId) as HTMLInputElement;
      input?.focus();
    }
  }, [props.focus, distinctId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    props.onChange?.(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor={distinctId} className="text mb-0.5 block text-sm">
        {props.label ? props.label : "\u2003"}
      </label>
      <input
        id={distinctId}
        name={props.dbKey}
        className={`w-full border-b-2 outline-none ${
          focused ? "border-b-blue-500" : "border-b-gray-500"
        } ${errorMessage ? "border-b-red-600" : "border-b-gray-500"}`}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type="text"
        required={props.required}
        value={textValue}
        placeholder={props.placeholder}
        minLength={props.minChars}
        onInvalid={(e) => {
          e.preventDefault();
          if (textValue.trim() === "") {
            setErrorMessage("Zadej Hodnotu.");
          } else if (
            props.minChars &&
            textValue.trim().length < props.minChars
          ) {
            setErrorMessage(`Zadej alespoň ${props.minChars} znaky.`);
          }
        }}
      />
      <span className="text mb-0.5 block text-sm text-red-600">
        {errorMessage}
      </span>
    </div>
  );
}

export default InputText;

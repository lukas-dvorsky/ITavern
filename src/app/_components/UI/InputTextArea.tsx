"use client";
import React, { useEffect, useId, useState } from "react";

interface InputTextAreaProps {
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
  className?: string;
}

function InputTextArea(props: InputTextAreaProps) {
  const [focused, setFocused] = useState(props.focus ?? false);
  const [textValue, setTextValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const distinctId = useId();

  useEffect(() => {
    const inputEl = document.getElementById(distinctId);
    if (!inputEl) return;

    const closestForm = inputEl.closest("form");

    const defaults = props.defaultValue;
    if (!defaults) return;

    if (closestForm instanceof HTMLFormElement) {
      const formType = closestForm.dataset.formType;

      if (formType === "create" && defaults.createDefault !== undefined) {
        setTextValue(defaults.createDefault);
      } else if (formType === "update" && defaults.editDefault !== undefined) {
        setTextValue(defaults.editDefault);
      }
    }
  }, [distinctId, props.defaultValue]);

  useEffect(() => {
    if (props.focus) {
      const input = document.getElementById(distinctId) as HTMLInputElement;
      input?.focus();
    }
  }, [props.focus, distinctId]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    props.onChange?.(e.target.value);
  };

  return (
    <div className={`w-full ${props.className}`}>
      <label htmlFor={distinctId} className="text mb-0.5 block text-sm">
        {props.label ?? "\u2003"}
      </label>
      <textarea
        id={distinctId}
        name={props.dbKey}
        className={`dark:inset-shadow-background-dark/80 inset-shadow-background-dark/20 h-full w-full resize-none border-2 p-4 inset-shadow-sm outline-none ${errorMessage ? "border-danger rounded-md" : focused ? "border-primary" : "border-transparent"}`}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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
      <span className="text text-danger mb-0.5 block text-sm">
        {errorMessage}
      </span>
    </div>
  );
}

export default InputTextArea;

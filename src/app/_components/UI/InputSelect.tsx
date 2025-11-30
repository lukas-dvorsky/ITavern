"use client";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";

export interface Option {
  label: string;
  value: string;
}

interface InputSelectProps {
  options: Option[];
  name: string;
  hasNull?: boolean;
  label?: string;
  placeholder?: string;
  focus?: boolean;
  defaultValue?: {
    createDefault?: Option;
    editDefault?: Option;
  };
}

function InputSelect(props: InputSelectProps) {
  const [focused, setFocused] = useState(props.focus ?? false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [select, setSelect] = useState<Option | null>(null);
  const distinctId = useId();

  const optionsWithNull = useMemo(() => {
    return props.hasNull
      ? [{ value: "", label: "" }, ...props.options]
      : props.options;
  }, [props.hasNull, props.options]);

  useEffect(() => {
    const closestForm = selectRef.current?.closest(
      "form",
    ) as HTMLFormElement | null;
    const formType = closestForm?.dataset.formType;

    if (formType === "create") {
      setSelect(
        props.defaultValue?.createDefault ?? optionsWithNull[0] ?? null,
      );
    } else if (formType === "update") {
      setSelect(props.defaultValue?.editDefault ?? optionsWithNull[0] ?? null);
    }
  }, [
    optionsWithNull,
    props.defaultValue?.createDefault,
    props.defaultValue?.editDefault,
  ]);

  useEffect(() => {
    if (props.focus && selectRef.current) {
      selectRef.current.focus();
    }
  }, [props.focus, props.defaultValue, optionsWithNull]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption =
      optionsWithNull.find((o) => o.value === e.target.value) ?? null;
    setSelect(selectedOption);
  };

  return (
    <div className="w-full">
      <label htmlFor={distinctId} className="text mb-0.5 block text-sm">
        {props.label ?? "\u2003"}
      </label>
      <select
        id={distinctId}
        ref={selectRef}
        name={props.name}
        className={`w-full border-b-2 outline-none ${
          focused ? "border-b-blue-500" : "border-b-gray-500"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        value={select?.value ?? ""}
      >
        {optionsWithNull.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;

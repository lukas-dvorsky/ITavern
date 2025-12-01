"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import InputText from "../UI/InputText";

interface SearchBarProps {
  children?: ReactNode;
  filterFunction?: (search: string) => ReactNode;
}

function SearchBar({ children, filterFunction }: SearchBarProps) {
  const [searchFor, setSearchFor] = useState("");

  return (
    <div className="flex w-full flex-col gap-12">
      <InputText
        dbKey=""
        onChange={(e: string) => setSearchFor(e)}
        placeholder="Hledat..."
        className="mt-5 mb-0"
      />
      <div className="max-h-60 overflow-y-scroll">
        {filterFunction ? filterFunction(searchFor) : children}
      </div>
    </div>
  );
}

export default SearchBar;

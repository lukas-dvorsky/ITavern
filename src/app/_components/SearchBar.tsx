"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import InputText from "./InputText";

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
        onChange={(e) => setSearchFor(e)}
        placeholder="Hledat..."
      />
      <div className="max-h-60 overflow-y-scroll">
        {filterFunction ? filterFunction(searchFor) : children}
      </div>
    </div>
  );
}

export default SearchBar;

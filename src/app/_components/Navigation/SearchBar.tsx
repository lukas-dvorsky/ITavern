"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import InputText from "../UI/InputText";
import GridLayout from "../Layout/GridLayout";

interface SearchBarProps {
  children?: ReactNode;
  filterFunction?: (search: string) => ReactNode;
}

function SearchBar({ children, filterFunction }: SearchBarProps) {
  const [searchFor, setSearchFor] = useState("");

  return (
    <GridLayout className="flex w-full flex-col gap-12">
      <InputText
        dbKey=""
        onChange={(e: string) => setSearchFor(e)}
        placeholder="Hledat..."
        className="col-span-6 col-start-1 mt-5 mb-0"
      />
      <div className="custom-scrollbar col-span-12 h-96 overflow-y-auto shadow-[inset_0_0_6px_rgba(0,0,0,0.1)]">
        {filterFunction ? filterFunction(searchFor) : children}
      </div>
    </GridLayout>
  );
}

export default SearchBar;

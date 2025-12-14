"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import InputText from "../UI/InputText";
import GridLayout from "../Layout/GridLayout";

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  listClassname?: string;
  searchBarClassname?: string;
  filterFunction?: (search: string) => ReactNode;
}
function SearchBar(props: SearchBarProps) {
  const [searchFor, setSearchFor] = useState("");

  return (
    <GridLayout className={`flex w-full flex-col gap-12 ${props.className}`}>
      <InputText
        dbKey=""
        onChange={(e: string) => setSearchFor(e)}
        placeholder="Hledat..."
        className={`col-span-6 col-start-1 mt-5 mb-0 ${props.searchBarClassname}`}
      />
      <div
        className={`custom-scrollbar col-span-12 overflow-y-auto shadow-[inset_0_0_6px_rgba(0,0,0,0.1)] ${props.listClassname}`}
      >
        {props.filterFunction
          ? props.filterFunction(searchFor)
          : props.children}
      </div>
    </GridLayout>
  );
}

export default SearchBar;

"use client";

import React, { useState } from "react";
import Button from "../Button";

interface LectureNavigatorLectureProps {
  name: string;
  children?: React.ReactNode;
}

const LectureNavigatorLecture: React.FC<LectureNavigatorLectureProps> = ({
  name,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = !!children;

  return (
    <div className="w-full bg-white py-2 pr-5 text-3xl text-black">
      <div
        className={`flex items-center space-x-2 ${hasChildren ? "cursor-pointer font-semibold" : ""}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && <span>{isOpen ? "▼" : "▶"}</span>}
        <div className="flex w-full items-center justify-between">
          <span>{name}</span>
          {/* IF ADMIN */}
          <div className="flex items-center justify-center gap-8">
            <Button
              click={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.stopPropagation();
              }}
            >
              +
            </Button>
            <button>X</button>
          </div>
        </div>
      </div>
      {hasChildren && isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
};

export default LectureNavigatorLecture;

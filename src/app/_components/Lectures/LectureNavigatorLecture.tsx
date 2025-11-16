"use client";

import React, { useRef, useState } from "react";
import Button from "../Button";
import LectureCreateForm from "./LectureCreateForm";
import Form from "../Form";

interface LectureNavigatorLectureProps {
  name: string;
  children?: React.ReactNode;
}

const LectureNavigatorLecture: React.FC<LectureNavigatorLectureProps> = ({
  name,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const hasChildren = !!children;

  return (
    <>
      <Form open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <LectureCreateForm />
      </Form>
      <div className="w-full bg-white py-2 text-3xl text-black">
        <div
          className={`flex items-center space-x-2 ${hasChildren ? "cursor-pointer font-semibold" : ""}`}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {hasChildren && <span>{isOpen ? "▼" : "▶"}</span>}
          <div className="flex w-full items-center justify-between pr-10">
            <span>{name}</span>
            {/* IF ADMIN */}
            <div className="flex items-center justify-center gap-8">
              <Button
                click={() => {
                  setIsFormOpen(true);
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
    </>
  );
};

export default LectureNavigatorLecture;

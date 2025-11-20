"use client";

import React, { useRef, useState } from "react";
import LectureForms from "./LectureForms";
import { api } from "~/trpc/react";
import type { Roles } from "generated/prisma";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface LectureNavigatorLectureProps {
  id: number;
  name: string;
  children?: React.ReactNode;
  userRole: Roles;
}

const LectureNavigatorLecture: React.FC<LectureNavigatorLectureProps> = ({
  id,
  name,
  children,
  userRole,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!children;

  return (
    <>
      <div
        className={`flex items-center space-x-2 py-4 pl-4 ${hasChildren ? "cursor-pointer font-semibold" : "pl-8"} hover:bg-gray-100`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
        )}
        <div className="flex h-full w-full items-center justify-between pr-10">
          <span>{name}</span>
          {/* IF ADMIN */}
          {userRole === "ADMIN" && (
            <div className="flex h-full items-center justify-center gap-8">
              <LectureForms id={id} name={name} />
            </div>
          )}
        </div>
      </div>
      {hasChildren && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-8 overflow-hidden border-l-2 border-l-gray-200"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default LectureNavigatorLecture;

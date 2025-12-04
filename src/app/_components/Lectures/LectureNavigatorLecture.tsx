"use client";

import React, { useState } from "react";
import LectureForms from "./LectureForms";
import type { Roles } from "generated/prisma";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface LectureNavigatorLectureProps {
  id: number;
  userId: string;
  name: string;
  children?: React.ReactNode;
  userRole: Roles;
  isPublic: boolean;
}

const LectureNavigatorLecture: React.FC<LectureNavigatorLectureProps> = ({
  id,
  userId,
  name,
  children,
  userRole,
  isPublic,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!children;

  return (
    <>
      <div
        className={`${!isPublic && "opacity-40"} flex items-center space-x-2 py-4 pl-4 ${hasChildren ? "cursor-pointer font-semibold" : "pl-8"} dark:hover:bg-background-dark/40 hover:bg-gray-100`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
        )}
        <div className="flex h-full w-full items-center justify-between pr-10">
          {!hasChildren ? (
            <a href={`lecture/${id}`}>{name}</a>
          ) : (
            <span>{name}</span>
          )}

          {/* IF ADMIN */}
          {userRole === "ADMIN" && (
            <div className="flex h-full items-center justify-center gap-8 opacity-100">
              <LectureForms id={id} name={name} userId={userId} />
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
              className="dark:border-l-background-dark/80 ml-8 overflow-hidden border-l-2 border-l-gray-200"
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

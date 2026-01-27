"use client";

import React, { useEffect, useState } from "react";
import type { RefObject } from "react";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";

interface ElementWatcherProps {
  elementRef: RefObject<HTMLElement | null>;
  lectureId: number;
}

function ElementWatcher({ elementRef, lectureId }: ElementWatcherProps) {
  const [completed, setCompleted] = useState(false);
  const setLectureCompleted = api.lectures.createCompletion.useMutation({
    onSuccess: () => {
      toast.success("Lekce byla dokončena.");
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef || !elementRef.current || completed) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom <= viewportHeight / 2 && !completed) {
        setLectureCompleted.mutate(lectureId);
        setCompleted(true);
      } else if (rect.bottom > viewportHeight / 2 && completed) {
        setCompleted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, completed]);

  return null;
}

export default ElementWatcher;

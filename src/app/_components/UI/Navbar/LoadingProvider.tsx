"use client";

import React, { createContext, useContext } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";

const LoadingContext = createContext<{ isLoading: boolean }>({
  isLoading: false,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const fetching = useIsFetching();
  const mutating = useIsMutating();

  const isLoading = fetching > 0 || mutating > 0;

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="infinite-load"
            className="fixed top-0 left-0 z-9999999 h-1 w-full overflow-hidden"
          >
            <motion.div
              className="bg-accent dark:bg-accent-dark h-full w-1/3"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

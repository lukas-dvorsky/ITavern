import React from "react";
import { getHTTPStatusCodeFromError } from "@trpc/server/unstable-core-do-not-import";
import Link from "next/link";

interface ErrorProps {
  err: any;
}

function Error(props: ErrorProps) {
  return (
    <div className="mt-32 flex h-full w-full flex-col items-center justify-center gap-10">
      <span className="text-6xl font-bold">
        {getHTTPStatusCodeFromError(props.err)}
      </span>
      <span className="text-xl">
        {props.err.message || "Něco se nepovedlo"}
      </span>
    </div>
  );
}

export default Error;

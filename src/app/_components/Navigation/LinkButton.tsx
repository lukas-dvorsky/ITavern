"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LinkButtonProps {
  title: string;
  link: string;
}

function LinkButton(props: LinkButtonProps) {
  const router = useRouter();
  return <button onClick={() => router.push(props.link)}>{props.title}</button>;
}

export default LinkButton;

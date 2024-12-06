"use client";

import { ArrowButton } from "@repo/ui";
import { Stats } from "./Sections";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Stats />
      <ArrowButton
        direction={"right"}
        arrowButtonColor={"purpleButton"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
}

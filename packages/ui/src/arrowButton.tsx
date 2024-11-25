"use client";

import React from "react";

interface ArrowButtonProps {
  onClick: () => void;
}

export default function ArrowButton({ onClick }: ArrowButtonProps) {
  return (
    <>
      <button onClick={onClick}> </button>
    </>
  );
}

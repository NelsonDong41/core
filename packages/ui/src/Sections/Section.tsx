import React from "react";

type SectionProps = {
  background: React.ReactNode;
  content: React.ReactNode;
  foreground?: React.ReactNode;
  height: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export type ForegroundProps = {
  items: { item: React.ReactNode[]; location: Coordinate }[];
};

export default function Section({
  background,
  content,
  foreground,
  height,
}: SectionProps): React.ReactNode {
  const sectionHeight = `${height}vh`;

  return (
    <div style={{ height: sectionHeight, width: "100vw" }}>
      <div
        style={{ height: sectionHeight }}
        className={`absolute z-0 w-screen`}
      >
        {background}
      </div>
      <div
        style={{ height: sectionHeight }}
        className={`absolute z-10 w-screen`}
      >
        {content}
      </div>
      <div
        style={{ height: sectionHeight }}
        className={`absolute z-20 w-screen`}
      >
        {foreground}
      </div>
    </div>
  );
}

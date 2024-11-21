import React from "react";

type InvalidType = undefined | null;
export type ForegroundItems = {
  item: Exclude<React.ReactNode, InvalidType>;
  coordinate: Coordinate;
}[];

type SectionProps = {
  background: React.ReactNode;
  content: React.ReactNode;
  foreground?: ForegroundItems;
  height: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export default function Section({
  background,
  content,
  foreground: foregroundItems,
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
        {foregroundItems?.map(({ item, coordinate }) => (
          <div
            key={`${coordinate.x}-${coordinate.y}-${item.toString()}`}
            className={`absolute left-[${coordinate.x}vw] top-[${coordinate.y}vh] z-21`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

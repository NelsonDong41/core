import React from "react";
import { Section } from "@repo/ui";
import { StreetSign } from "@repo/ui";

const background = <div className="w-full h-full bg-[#BEACD0]" />;

const content = (
  <div className="w-full h-full flex flex-row gap-2 justify-center content-center">
    <Box>
      <p className="text-6xl font-semibold mb-2">{"10+"}</p>
      <p>{"years of HackBeanpot"}</p>
    </Box>
    <Box>
      <p className="text-6xl font-semibold mb-2">{"10+"}</p>
      <p>{"sponsors each year"}</p>
    </Box>
    <Box>
      <p className="text-6xl font-semibold mb-2">{"800+"}</p>
      <p>{"beans and counting"}</p>
    </Box>
  </div>
);

export default function Stats(): React.ReactNode {
  return (
    <>
      <Section background={background} content={content} height={40} />
      <StreetSign streetName="Huntington" suffix="Avenue" />
    </>
  );
}

export function Box({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="m-12 rounded-lg w-full max-w-[25vw] text-center text-[#474747] flex flex-col justify-center bg-[#FBFBFB]">
      {children}
    </div>
  );
}

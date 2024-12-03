import { Section } from "@repo/ui";
import { Footer, NavBar } from "../lib/Components";
import SponsorsBackground from "./background";
import SponsorsContent from "./content";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <NavBar />
      <Section
        name={"sponsors"}
        background={<SponsorsBackground />}
        content={<SponsorsContent />}
        height={300}
      />
      <Footer />
    </main>
  );
}

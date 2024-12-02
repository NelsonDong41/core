import { Section } from "@repo/ui";
import { Footer, NavBar } from "../lib/Components";
import TeamsBackground from "./background";
import TeamsContent from "./content";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <NavBar />
      <Section
        name={"teams"}
        background={<TeamsBackground />}
        content={<TeamsContent />}
        height={300}
      />
      <Footer />
    </main>
  );
}

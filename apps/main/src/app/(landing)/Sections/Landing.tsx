import React from "react";
import { Section } from "@repo/ui";
import Image from "next/image";
import ExternalLink from "../../lib/Components/ExternalLink";

export default function Landing(): JSX.Element {
  const background = (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <Image alt="ProjectsBackground" src="/landing_background.png" fill />
    </div>
  );

  const content = (
    <div className="w-full h-full flex gap-2 items-start justify-end p-5">
      <ExternalLink href="https://www.instagram.com/hackbeanpot/?hl=en">
        <Image
          alt="InstagramLogo"
          src="/instagram_logo.png"
          width={40}
          height={40}
        />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/company/hackbeanpot-inc/posts/?feedView=all">
        <Image
          alt="LinkedinLogo"
          src="/linkedin_logo.png"
          width={40}
          height={40}
        />
      </ExternalLink>
      <ExternalLink href="">
        <Image alt="EmailLogo" src="/email_logo.png" width={40} height={40} />
      </ExternalLink>
    </div>
  );

  return (
    <Section
      name={"Landing"}
      background={background}
      content={content}
      height={70}
    />
  );
}

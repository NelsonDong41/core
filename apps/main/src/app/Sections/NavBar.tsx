"use client";

import React, { useEffect, useRef, useState } from "react";
import { HomeIcon, MlhBanner } from "../Assets";
import LocalLink from "../Components/LocalLink";

const BANNER_DISAPPEAR_DURATION = 300;

const useIsAtTopWithDelayedDisappear = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const position = window.scrollY;
      if (position <= 0) {
        setIsAtTop(true);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsAtTop(false);
        }, BANNER_DISAPPEAR_DURATION);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return isAtTop;
};

const NavBar = () => {
  const isAtTop = useIsAtTopWithDelayedDisappear();

  return (
    <div className="sticky top-0 z-[31] w-full">
      <div className="w-full bg-white flex flex-row w-full h-full justify-between align-middle">
        {/* TODO: Figure out scrolling to top smoothly*/}
        <LocalLink href={"/"} className={"px-0"}>
          <HomeIcon />
        </LocalLink>

        <div className="flex flex-row align-middle justify-end">
          <LocalLink href={"#about"} className="text-xl">
            About
          </LocalLink>
          <LocalLink href={"#projects"} className="text-xl">
            Projects
          </LocalLink>
          <LocalLink href={"#sponsors"} className="text-xl">
            Sponsors
          </LocalLink>
          <LocalLink href={"#team"} className="text-xl">
            Team
          </LocalLink>
          <LocalLink
            href={"#sponsor-us"}
            className="bg-orange text-xl text-text-light"
          >
            Sponsor Us
          </LocalLink>
          <LocalLink
            href={"#apply"}
            className="bg-green text-xl text-text-light"
          >
            Apply
          </LocalLink>
        </div>
      </div>

      {/* MLH banner */}
      {isAtTop && (
        <div className="w-0 h-0 pl-[5vw] animate-wiggle">
          <MlhBanner />
        </div>
      )}
    </div>
  );
};

export default NavBar;

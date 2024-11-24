"use client";

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface FAQDropdownProps {
  dropdownQuestion: string;
  dropdownAnswer: string;
}

export default function FAQDropdown({
  dropdownQuestion,
  dropdownAnswer,
}: FAQDropdownProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleAccordion}
        className={`relative rounded-lg w-3/5 bg-[#FBFBFB] text-[#3F3F3F] grid grid-cols-2 place-content-around my-5 transition-all duration-300 ${isOpen ? "h-32" : "h-16"}`}
      >
        <p className="text-lg ml-5">{dropdownQuestion}</p>
        <div
          className={`w-6 h-6 mr-5 place-self-end transition-transform duration-500 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? <RemoveIcon /> : <AddIcon />}
        </div>
        {isOpen && (
          <div className="absolute w-11/12 col-span-2 border-t border-[#CFCFCF] left-1/2 transform -translate-x-1/2 top-1/2  "></div>
        )}
        {isOpen && <p className="text-lg ml-5 col-span-2">{dropdownAnswer}</p>}
      </div>
    </>
  );
}

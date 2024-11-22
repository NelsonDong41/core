import React from "react";

type StreetSignProps = {
  streetName: string;
  suffix: string;
};

export default function StreetSign({
  streetName,
  suffix,
}: StreetSignProps): React.ReactNode {
  return (
    <div className="flex justify-center items-center">
      <div className="relative inline-flex items-center bg-[#02877F] text-white border-2 border-white rounded-lg px-4 py-2 transform -rotate-2">
        <p className="text-lg font-big-shoulder-display">{streetName}</p>
        <p className="text-sm ml-2 mb-1">{suffix}</p>
      </div>
    </div>
  );
}

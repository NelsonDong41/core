import React from "react";
import "@fontsource/big-shoulders-display"; // Defaults to weight 400

interface StreetSignProps {
  streetName: string;
  suffix: string;
}

export function StreetSign({
  streetName,
  suffix,
}: StreetSignProps): React.ReactElement {
  return (
    <div
      style={{
        backgroundColor: "#02877F",
        border: "4px solid white",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        display: "flex",
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "2.5em",
          fontFamily: "Big Shoulders Display",
          fontWeight: "200",
        }}
      >
        {streetName}
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1.5em",
          fontFamily: "Big Shoulders Display",
          fontWeight: "100",
          marginTop: 6,
          marginLeft: 5,
        }}
      >
        {suffix}
      </p>
    </div>
  );
}

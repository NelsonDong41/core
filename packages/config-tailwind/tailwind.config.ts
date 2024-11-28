import type { Config } from "tailwindcss";
import { colors, screens } from "./theme-tokens";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      fontFamily: {
        "big-shoulder-display": ['"Big Shoulder Display"', "cursive"],
        "weird-font": ['"Eater"', "cursive"],
      },
    },
    colors,
    screens,
  },
  plugins: [],
};
export default config;

// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./src/app/**/*.{tsx, ts}"],
  presets: [sharedConfig],
  theme: {
    fontFamily: {
      "big-shoulder-display": ["Big Shoulder Display", "sans-serif"],
    },
  },
};

export default config;

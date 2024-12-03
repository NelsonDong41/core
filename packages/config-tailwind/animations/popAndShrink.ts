import { AnimationConfig } from "./type";

const popAndShrink: AnimationConfig = {
  keyframes: {
    "0%": { transform: "scale(1)", opacity: 1 },
    "20%": { transform: "scale(1.15)", opacity: 1 },
    "100%": { transform: "scale(0)", opacity: 0 },
  },
  animation: "popAndShrink 300ms ease-out forwards",
};

export default popAndShrink;

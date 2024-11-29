import { AnimationConfig } from "./type";

const wiggleAnimation: AnimationConfig = {
  keyframes: {
    "0%, 100%": { transform: "rotate(-5deg)" },
    "50%": { transform: "rotate(5deg)" },
  },
  animation: "wiggle 1s ease-in-out infinite",
};

export default wiggleAnimation;

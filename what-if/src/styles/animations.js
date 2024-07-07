import { keyframes } from ".";

export const fadeLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0px)",
  },
});

export const fadeUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0px)",
  },
});

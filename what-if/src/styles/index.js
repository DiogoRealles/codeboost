import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        red900: "#FF0000",
        red800: "#FF040D",
        white: "#FFFFFF",
        gray800: "#33303E",
        gray700: "#4E4B59",
        gray600: "#5F5C6B",
        gray500: "#7A7786",
        gray400: "#8C8A97",
        gray300: "#ACABB7",
        gray200: "#C6C5CE",
        gray100: "#E1E0E7",
      },
    },
    utils: {
      ai: (value) => ({
        alignItems: value,
      }),
      jc: (value) => ({
        justifyContent: value,
      }),
    },
  });

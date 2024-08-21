import { styled } from "../../styles";

import { Container } from "../../styles/global";
import { fadeLeft, fadeUp } from "../../styles/animations";

import BgDetail from "../../assets/bg-details.jpg";

export const HeroStyle = styled("section", {
  paddingTop: 96,
  background: `url(${BgDetail.src}) no-repeat top center`,
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  backgroundAttachment: "fixed",
  [`${Container}`]: {
    display: "flex",
    ai: "flex-start",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  },
});

export const ImageCharacter = styled("div", {
  flex: 1,
  width: "100%",
  maxWidth: 486,
  height: 631,
  borderRadius: 5,
  overflow: "hidden",
  animation: `${fadeLeft} .6s forwards`,
});

export const InfoCharacter = styled("div", {
  flex: 1,
  paddingLeft: 32,
  display: "flex",
  ai: "flex-start",
  paddingTop: 154,
  animation: `${fadeUp} .6s forwards`,
  span: {
    display: "block",
    marginTop: 5,
    fontWeight: 400,
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    color: "#ACABB7",
    opacity: 0.6,
    marginRight: 19,
  },
  "& > div": {
    position: "relative",
    flex: 1,
    maxWidth: 520,
    paddingLeft: 22,
    "&:before": {
      content: "",
      position: "absolute",
      top: 12,
      left: 0,
      width: 4,
      height: 46,
      backgroundColor: "$red800",
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      color: "$white",
      marginBottom: 13,
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      color: "$gray400",
      maxWidth: 385,
    },
  },
});

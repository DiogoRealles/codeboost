import { keyframes, styled } from "../../../styles";

import { Container } from "../../../styles/global";
import { fadeLeft } from "../../../styles/animations";

import bgHero from "../../../assets/bg-hero.jpg";

export const SectionHeroStyle = styled("section", {
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: 731,
  background: `url(${bgHero.src}) no-repeat top center`,
  paddingTop: 96,
  display: "flex",
  backgroundAttachment: "fixed",
  [`${Container}`]: {
    display: "flex",
    ai: "flex-start",
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 300,
    backgroundImage: "linear-gradient(transparent, rgb(0 0 0))",
    zIndex: -1,
  },
});

export const AreaSocial = styled("div", {
  width: 72,
  height: "100%",
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ul: {
    display: "flex",
    flexDirection: "column",
    ai: "center",
    listStyle: "none",
    padding: "30px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    width: "100%",
    li: {
      "&:not(:last-child)": {
        marginBottom: 32,
      },
      a: {
        display: "block",
      },
    },
  },
});

export const ContentText = styled("div", {
  height: "100%",
  paddingLeft: 96,
  paddingRight: 71,
  display: "flex",
  ai: "flex-end",
  jc: "space-between",
  flex: 1,
  paddingBottom: 31,
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ".left": {
    flex: 1,
    maxWidth: 574,
    paddingBottom: "10rem",
    animation: `${fadeLeft} .6s forwards`,
    h3: {
      "font-weight": "700",
      "font-size": "1.4rem",
      "line-height": "2.1rem",
      "letter-spacing": "0.095em",
      color: "#FFA800",
      marginBottom: 8,
    },
    h1: {
      foneWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      marginBottom: 24,
      maxWidth: 400,
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "24px",
      color: "$gray100",
      maxWidth: 490,
      marginBottom: 32,
    },
  },
});

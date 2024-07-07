import { styled } from "../../styles";

import { Container } from "../../styles/global";
import { fadeLeft } from "../../styles/animations";

export const PageNotFoundStyle = styled("section", {
  marginTop: 96,
  [`${Container}`]: {
    display: "flex",
    ai: "center",
    flexDirection: "column",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    paddingTop: 96,
    paddingBottom: 150,
  },
  h1: {
    fontWeight: 600,
    fontSize: "4.9rem",
    lineHeight: "5.9rem",
    marginBottom: 24,
  },
  p: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    maxWidth: 641,
    marginBottom: 40,
  },
  button: {
    marginBottom: 72,
  },
});

import { styled } from "../../styles";

import { Container } from "../../styles/global";

export const FooterStyle = styled("footer", {
  width: "100%",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  ai: "center",
  padding: "4rem 0",
  [`${Container}`]: {
    display: "flex",
    ai: "center",
    jc: "space-between",
    "& > div": {
      display: "flex",
    },
  },
  strong: {
    fontWeight: 700,
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "$white",
    marginRight: 100,
  },
  p: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#8C8A97",
  },
});

import { styled } from "../../styles";

export const ChacaracterImage = styled("div", {
  overflow: "hidden",
  borderRadius: 5,
  height: 372,
  marginBottom: 16,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform .3s ease",
  },
});

export const ChacaracterInfo = styled("div", {
  width: "100%",
  display: "flex",
  ai: "flex-start",
  jc: "space-between",
  "& > div": {
    textAlign: "left",
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$white",
      marginBottom: 4,
      transition: "color .3s ease",
    },
    p: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHight: "2.1rem",
      color: "$gray500",
      transition: "color .3s ease",
    },
  },
  span: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#FFFFFF",
    opacity: 0.4,
    transition: "opacity .3s ease",
  },
});

export const ChacaracterCardStyle = styled("button", {
  width: "100%",
  border: 0,
  backgroundColor: "transparent",
  "&:hover": {
    [`${ChacaracterImage}`]: {
      img: {
        transform: "scale(1.03)",
      },
    },
    [`${ChacaracterInfo}`]: {
      "& > div": {
        h3: {
          color: "$red800",
        },
        p: {
          color: "$white",
        },
      },
      span: {
        opacity: 1,
      },
    },
  },
});

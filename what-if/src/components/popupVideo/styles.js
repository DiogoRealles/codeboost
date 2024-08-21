import { styled } from "../../styles";

import ThumbVideo from "../../assets/thumb-video.png";
import { fadeUp } from "../../styles/animations";

export const StylePopupVideo = styled("div", {
  animation: `${fadeUp} .6s forwards`,
  span: {
    display: "block",
    marginBottom: 16,
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.095em",
    color: "$gray100",
    textTransform: "uppercase",
  },
  button: {
    width: 312,
    height: 179,
    display: "flex",
    ai: "center",
    jc: "center",
    background: `url(${ThumbVideo.src}) no-repeat center center`,
    borderRadius: 10,
    border: 0,
    "& > div": {
      width: 47,
      height: 47,
      borderRadius: "50%",
      display: "flex",
      ai: "center",
      jc: "center",
      background: "rgba(19, 19, 19, 0.8)",
      backdropFilter: "blur(2.5px)",
      transition: "transform .3s ease",
    },
    "&:hover": {
      "& > div": {
        transform: "scale(1.1)",
      },
    },
  },
});

import { styled } from "../../styles";

export const StyleButton = styled("button", {
  padding: "15px 52px",
  border: 0,
  fontWeight: 600,
  fontSize: "16px",
  color: "$white",
  borderRadius: 5,
  transition: "filter .3s",
  "&:hover": {
    filter: "brightness(0.8)",
  },
});

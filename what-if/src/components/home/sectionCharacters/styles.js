import { styled } from "../../../styles";

export const SectionCharactersStyle = styled("section", {
  width: "100%",
  paddingTop: 56,
  paddingBottom: 76,
});

export const TitleSection = styled("div", {
  display: "flex",
  ai: "center",
  span: {
    fontWeight: 400,
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    color: "$white",
    opacity: 0.4,
    marginRight: "11.3rem",
  },
  h2: {
    flex: 1,
    maxWidth: "21.6rem",
    borderLeft: "1px solid $red800",
    paddingLeft: 16,
    fontWeight: 600,
    fontSize: "2.5rem",
    lineHeight: "3.5rem",
    color: "#FFFFFF",
  },
});

export const CharacterList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "40px 33px",
  marginTop: "5.6rem",
});

export const CardMarvel = styled("div", {
  width: "100%",
  height: 372,
  display: "flex",
  ai: "center",
  jc: "center",
});

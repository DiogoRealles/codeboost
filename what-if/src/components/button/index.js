import { css } from "../../styles";
import { StyleButton } from "./styles";

export function Button({ label, onCLick, colorBg }) {
  return (
    <StyleButton onClick={onCLick} css={{ backgroundColor: `${colorBg}` }}>
      {label}
    </StyleButton>
  );
}

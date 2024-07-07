import { StylePopupVideo } from "./styles";

import iconPlay from "../../assets/play.svg";
import Image from "next/future/image";

export function PopupVideo({ text, idVideo }) {
  return (
    <StylePopupVideo>
      <span>{text}</span>
      <button>
        <div>
          <Image src={iconPlay} alt="Icon play" />
        </div>
      </button>
    </StylePopupVideo>
  );
}

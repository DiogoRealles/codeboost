import { LoadingStyle } from "./styles";

import LoadingImage from "../../assets/loader.gif";
import Image from "next/image";

export function Loading() {
  return (
    <LoadingStyle>
      <Image width={100} height={100} src={LoadingImage} alt="Loader" />
    </LoadingStyle>
  );
}

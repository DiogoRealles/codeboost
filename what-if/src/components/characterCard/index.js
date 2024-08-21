import Image from "next/future/image";
import { useRouter } from "next/router";

import {
  ChacaracterCardStyle,
  ChacaracterImage,
  ChacaracterInfo,
} from "./styles";

export function CharacterCard({ image, name, slug }) {
  const router = useRouter();
  return (
    <ChacaracterCardStyle onClick={() => router.push(`/character/${slug}`)}>
      <ChacaracterImage>
        <Image src={image} width={280} height={372} alt="Image character" />
      </ChacaracterImage>
      <ChacaracterInfo>
        <div>
          <h3>{name}</h3>
          <p>Marvel Studios</p>
        </div>
        <span>What if?</span>
      </ChacaracterInfo>
    </ChacaracterCardStyle>
  );
}

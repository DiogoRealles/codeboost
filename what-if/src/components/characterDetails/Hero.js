import Image from "next/image";
import { useEffect } from "react";

import { Container } from "../../styles/global";
import { HeroStyle, ImageCharacter, InfoCharacter } from "./styles";

export function CharacterHero({ dataCharacter }) {
  return (
    dataCharacter && (
      <HeroStyle>
        <Container>
          <ImageCharacter>
            <Image
              src={dataCharacter.data.image.url}
              width={486}
              height={631}
              alt="Imagem do personagem"
            />
          </ImageCharacter>
          <InfoCharacter>
            <span>A História</span>
            <div>
              <h1>{dataCharacter.data.name}</h1>
              <p>{dataCharacter.data.description[0].text}</p>
            </div>
          </InfoCharacter>
        </Container>
      </HeroStyle>
    )
  );
}

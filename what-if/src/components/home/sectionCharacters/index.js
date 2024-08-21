import Image from "next/image";

import {
  CardMarvel,
  CharacterList,
  SectionCharactersStyle,
  TitleSection,
} from "./styles";

import { Container } from "../../../styles/global";
import { CharacterCard } from "../../characterCard";

import Logo from "../../../assets/logo.svg";

export function SectionCharacters({ characters }) {
  return (
    <SectionCharactersStyle>
      <Container>
        <TitleSection>
          <span>What if?</span>
          <h2>Personagens Marvel</h2>
        </TitleSection>
        <CharacterList>
          {characters?.map(({ data, id, uid }) => {
            return (
              <CharacterCard
                key={id}
                slug={uid}
                name={data.name}
                image={data.image.url}
              />
            );
          })}
          <CardMarvel>
            <Image src={Logo} alt="Marvel Studios" />
          </CardMarvel>
        </CharacterList>
      </Container>
    </SectionCharactersStyle>
  );
}

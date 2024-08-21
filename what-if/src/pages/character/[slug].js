import { useRouter } from "next/router";

import { PageTitle } from "../../components/PageTitle";
import { SectionCharacters } from "../../components/home/sectionCharacters";
import { CharacterHero } from "../../components/characterDetails/Hero";

import { getPrismicClient } from "../../service/prismic";

import { Loading } from "../../components/loading";

export default function CharacterDetailsPage({ character, characters }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <>
      <PageTitle
        title={`Codeboost - What If? | ${character.data.name}`}
        description={`Codeboost - What If? | Detalhes do personagem - ${character.data.name}`}
      />
      <CharacterHero dataCharacter={character} />
      {characters && <SectionCharacters characters={characters} />}
    </>
  );
}

export const getStaticPaths = async () => {
  // Conexão com o prismic
  const prismic = getPrismicClient();

  // Buscando todos os personagens cadastrados
  const characters = await prismic.getAllByType("character");

  // Criando as rotas estaticas de acordo com o slug de cada personagem
  const paths = characters.map(({ data }) => {
    return {
      params: { slug: data.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType("character");

  // Retorna somente o dado do personagem acessado
  const character = characters.find(({ data }) => {
    return data.slug === context.params.slug;
  });

  // Remove o personagem da pagina atual da lista de personagens
  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug === character.data.slug;
    }),
    1
  );

  return {
    props: {
      character,
      characters,
    },
  };
};

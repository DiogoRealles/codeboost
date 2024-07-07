import { useEffect, useState } from "react";
import { SectionCharacters } from "../components/home/sectionCharacters";
import { SectionHero } from "../components/home/sectionHero";

import { PageTitle } from "../components/PageTitle";

import { getPrismicClient } from "../service/prismic";

export default function Home({ dataPage, characters }) {
  return (
    <>
      <PageTitle
        title="Codeboost - What If?"
        description="Projeto desenvolvido no módulo de NextJs do Curso Codeboost, ministrado pelo William Moreira"
      />
      {dataPage && <SectionHero data={dataPage} />}

      {characters && <SectionCharacters characters={characters} />}
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPage = await prismic.getSingle("home");

  const characters = await prismic.getAllByType("character");

  return {
    props: {
      dataPage: contentsPage.data,
      characters,
    },
    revalidate: 60,
  };
};

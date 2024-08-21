import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./styles";
import CardCharacter from "../CardCharacter/Index";
import imgLoader from "../assets/img/loader.gif";
import axios from "axios";
import { useEffect, useState } from "react";

const Index = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState("");
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        const array = [...characters, ...res.data.results];

        setCharacters(array);
        setCountPages(res.data.info.pages);
        setQtyCharacters(res.data.info.count);
        setLoading(false);
      });
    // .catch()
    // .finally(setLoading(false));
  }, [page]);

  return (
    <>
      {loading && (
        <Loader>
          <img src={imgLoader} alt="Loading..." />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty</h1>
          <span>Nº de Personagens: {qtyCharacters}</span>
        </HeaderApp>

        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ image, name, gender, species }, index) => (
                <CardCharacter
                  key={index}
                  image={image}
                  name={name}
                  gender={gender}
                  specie={species}
                />
              ))}
          </div>

          {!(page === countPages) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
};

export default Index;

import { ContainerApp, HeaderApp, ContentCharacters, Loader } from "./styles";
import CardCharacter from "../CardCharacter";
import axios from "axios";
import { useState, useEffect } from "react";
import IconLoader from "../../assets/loader.gif";

const Index = () => {
  const [characters, setCharacters] = useState([]);
  const [qtdCharacters, setqtdCharacters] = useState(0);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(0);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
        setqtdCharacters(response.data.info.count);
        setIsLoader(false);
      });
  }, [page]);

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}
      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty</h1>
          <span>Nº de personagens: {qtdCharacters}</span>
        </HeaderApp>

        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ id, image, name, genre, specie }) => (
                <CardCharacter
                  image={image}
                  name={name}
                  gender={genre}
                  spacie={specie}
                  key={id}
                />
              ))}
          </div>
          {!(page === countPages) && (
            <button onClick={() => setPage(page + 1)}>Loard more</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
};

export default Index;

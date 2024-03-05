import { ContainerCard } from "./styles";

const Index = ({ image, name, gender, specie }) => {
  return (
    <ContainerCard>
      <div className="image">
        <img src={image} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Gênero: {gender}</li>
          <li>Espécie: {specie}</li>
        </ul>
      </div>
    </ContainerCard>
  );
};

export default Index;

import img00 from "./img00.webp";

const Index = () => {
  return (
    <div>
      <h2>Component 09</h2>
      <p>
        <strong>image:</strong> Para importar uma imagem (.PNG, .JPG, .SVG,
        etc). É necessário importa-la como um component. <br />
      </p>
      <br />

      <div>
        <img src={img00} alt="Pokémon" width={250} height={250} />
      </div>
    </div>
  );
};

export default Index;

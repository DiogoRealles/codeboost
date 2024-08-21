const cars = ["Car 01", "Car 02", "Car 03", "Car 04", "Car 05"];

const Index = () => {
  return (
    <div>
      <h2>Component 10</h2>
      <p>
        <strong>map:</strong> Para mapear uma array coloquei o map dentro de um
        bloco, é importante passar <strong>key</strong>.
        <br />
      </p>
      <br />

      <div>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>{car}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;

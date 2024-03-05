import { useEffect, useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component renderized: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Component 05</h2>
      <p>
        <strong>useEffect:</strong> É um <strong>hook</strong> que permite
        iniciar valores quando um component é renderiado. <br />
        Possui um array de dependências: [] que renderiza o component quando seu
        valor é alterado. <br />
      </p>
      <br />

      <div>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Index;

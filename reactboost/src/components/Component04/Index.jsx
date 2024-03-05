import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const handlePriceUp = () => {
    setCount(count + 1);
  };

  const handlePriceDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Component 04</h2>
      <p>
        <strong>useState:</strong> É um <strong>hook</strong> que permite
        guardar valores temporáriamente, quando seu estado muda o component e
        seus filhos são renderiado. <br />
        Possui dois valores: [0]: É o valor inicial. <br />
        [1]: É é uma função para alterar o valor. <br />
      </p>
      <br />

      <div>
        <button onClick={handlePriceUp}>+</button>
        <h1>Total: {count}</h1>
        <button onClick={handlePriceDown}>-</button>
      </div>
    </div>
  );
};

export default Index;

const Button = ({ label, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
};

const Index = () => {
  function handleClick() {
    alert("Button clicked");
  }

  return (
    <div>
      <h2>Component 03</h2>
      <p>
        <strong>Props:</strong> São propriedades / valores que um componente
        pode usar.
      </p>
      <br />

      <div>
        <Button label="Click me" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Index;

const Input = ({ id, name, type, valueInput, setInputValue }) => {
  return (
    <div>
      <label htmlFor={id}>{id}:</label> <br />
      <input
        id={id}
        name={name}
        type={type}
        value={valueInput}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </div>
  );
};

export default Input;

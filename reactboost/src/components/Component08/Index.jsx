import { useState } from "react";
import Input from "./Input";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [terms, setTerms] = useState(false);

  const options = [
    { value: "", text: "Selecione uma opção de contato" },
    { value: "email", text: "E-mail" },
    { value: "phone", text: "Telefone" },
    { value: "whatsapp", text: "WhatsApp" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChangeSelct = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const [messageSubmitInfo, setMessageSubmitInfo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name | !email) {
      setMessageSubmitInfo("Preencha todos os campos e tente novamente!");
    } else {
      setMessageSubmitInfo("Formulário enviado com sucesso.");
      setName("");
      setEmail("");
      setTerms("");
    }
  }

  function handleChangeInterest({ target }) {
    setInterest(target.value);
  }

  function handleChangeTerms({ target }) {
    setTerms(target.checked);
  }

  return (
    <div>
      <h2>Component 08</h2>
      <p>
        React fornece states e hooks para trabalhar com dados de formulários...
      </p>

      <form action="" onSubmit={handleSubmit}>
        <select
          className="text-green-950 rounded-lg bg-gray-300 font-sans w-full cursor-pointer h-[58px] px-4"
          name="channel"
          id="channelEmail"
          value={selected}
          onChange={handleChangeSelct}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>{" "}
        <br />
        <Input
          id="Nome"
          type="text"
          valueInput={name}
          setInputValue={setName}
        />
        <br />
        <Input
          id="Email"
          type="text"
          valueInput={email}
          setInputValue={setEmail}
        />
        <br />
        <span>
          Tenho interesse em:{" "}
          <label>
            <input
              id="apto"
              name="interest"
              type="radio"
              value="apto"
              checked={interest !== "apto"}
              onChange={handleChangeInterest}
            />{" "}
            Apartamento
          </label>
          <label>
            <input
              id="casa"
              name="interest"
              type="radio"
              value="casa"
              checked={interest !== "casa"}
              onChange={handleChangeInterest}
            />{" "}
            Casa
          </label>
        </span>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={terms}
            checked={terms}
            onChange={handleChangeTerms}
          />{" "}
          Aceito <a href="#">termos de uso</a> <br />
          {terms && <small>Termos aceito</small>}
        </label>
        <br />
        <button type="submit">Enviar</button> <br />
        {messageSubmitInfo}
      </form>
      <br />
    </div>
  );
};

export default Index;

import Button from "./Button";
import User from "./User";
import { UserContextProvider } from "./UserContext";

const Index = () => {
  return (
    <UserContextProvider>
      <h2>Component 07</h2>
      <p>
        <strong>context:</strong> É uma métodologia / forma de compartilhar
        states entre outros componentes sem a necessidade de passar via props.
        <br />
        Cria-se uma bolha que envolve todos os componentes e dentro desta bolha
        principal ficam os states / dados que devem ser compartilhados entre os
        componentes. <br />
        <strong>createContext:</strong> É um <strong>hook</strong> que permite
        criar o contexto. <br />
        <strong>useContext:</strong> É um <strong>hook</strong> que permite usar
        em diferentes locais os states do contexto. <br />
        <strong>provider:</strong> É um propiedade que permite prover /
        disponibilizar os states / dados. <br />
      </p>
      <br />

      <div>
        <User />
        <Button />
      </div>
    </UserContextProvider>
  );
};

export default Index;

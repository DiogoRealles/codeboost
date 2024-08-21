import { useState } from "react";
import { Card, CardTitle, CardText } from "./styles";
import GlobalStyle from "./styles/global";

const Index = () => {
  const [isChangeColor, setIsChangeColor] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <h2>Component 13</h2>
      <p>
        <strong>styled-components:</strong> É uma lib <strong>CSS in JS</strong>
        .Permite criar components e estiliza-lo ao mesmo tempo. <br />
      </p>
      <br />

      <div>
        <Card>
          <CardTitle titlechangecolor={isChangeColor}>Title Card 01</CardTitle>
          <CardText>
            Nobis magnam natus deleniti quam, mollitia perferendis doloremque
            eum doloribus maxime error saepe accusantium adipisci nulla
            architecto a eius! Dolorum?
          </CardText>
          <button onClick={() => setIsChangeColor(!isChangeColor)}>
            Change color
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Index;

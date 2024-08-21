import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  border: none;
  font-family: 'Roboto, sans-serif';
}

html{
  font-size: 62.5%;
}

body{
  background: #101010;
  color: #ffffff;
  font-size: 1.6rem;
}

img{
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
}
`;

export default GlobalStyle;

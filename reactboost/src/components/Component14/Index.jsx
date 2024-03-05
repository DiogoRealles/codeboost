import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const Index = () => {
  return (
    <BrowserRouter>
      <h2>Component 14</h2>
      <p>
        <strong>React Router DOM:</strong> É uma lib que permite trabalhar com
        rotas no react.
        <br />
      </p>
      <br />

      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>
      </div>

      <Router />
    </BrowserRouter>
  );
};

export default Index;

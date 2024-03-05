import { useContext } from "react";
import { UserContext } from "./UserContext";

const Button = () => {
  const { handleCount } = useContext(UserContext);

  return (
    <div>
      <button onClick={handleCount}>+</button>
    </div>
  );
};

export default Button;

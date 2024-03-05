import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const { name, count } = useContext(UserContext);

  return (
    <div>
      <h3>User: {name}</h3>
      <p>value: {count}</p>
    </div>
  );
};

export default User;

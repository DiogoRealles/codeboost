import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <UserContext.Provider value={{ name: "Diogo", count, handleCount }}>
      {children}
    </UserContext.Provider>
  );
};

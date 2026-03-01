import { createContext, useState } from "react";

export const loginContext = createContext({});

export default function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (name) => {
    setIsLogin(true);
    setUserName(name);
  };

  const logout = () => {
    setIsLogin(false);
    setUserName("");
  };

  return (
    <loginContext.Provider value={{ isLogin, userName, login, logout }}>
      {children}
    </loginContext.Provider>
  );
}
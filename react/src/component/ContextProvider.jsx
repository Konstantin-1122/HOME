import { createContext, useEffect, useState } from "react";

export const loginContext = createContext({});

export default function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsLogin(true);
      setUserName(savedUser);
    }
  }, []);

  const login = (name) => {
    setIsLogin(true);
    setUserName(name);
    localStorage.setItem("user", name);
  };

  const logout = () => {
    setIsLogin(false);
    setUserName("");
    localStorage.removeItem("user"); 
  };

  return (
    <loginContext.Provider value={{ isLogin, userName, login, logout }}>
      {children}
    </loginContext.Provider>
  );
}
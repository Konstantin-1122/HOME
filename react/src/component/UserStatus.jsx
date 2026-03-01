import { useContext, useState } from "react";
import { loginContext } from "./ContextProvider";

export default function UserStatus() {
  const { isLogin, userName, login, logout } = useContext(loginContext);
  const [input, setInput] = useState("");

  if (isLogin) {
    return (
      <div>
        <h2>Hello {userName}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => login(input)}>Login</button>
    </div>
  );
}
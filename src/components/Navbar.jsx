import { AuthContext } from "../contexts/AuthContext";

import { useContext } from "react";

export const Navbar = () => {
  const call = () => {
    alert("Please fill details");
  };
  const { isAuth, toggleAuth, register } = useContext(AuthContext);
  return (
    <div>
      {!register ? (
        <div></div>
      ) : isAuth ? (
        <button onClick={toggleAuth}>Logout</button>
      ) : (
        <button onClick={call}>Login</button>
      )}
    </div>
  );
};

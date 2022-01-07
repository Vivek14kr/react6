import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [register, setRegister] = useState(false);
  const login = (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res, "kfjskd");
        setToken(res.token);
      });
    setIsAuth(!isAuth);
  };

  const registration = (data) => {
    //https://reqres.in/api/register
    fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setRegister(true);
      });
  };

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, toggleAuth, login, token, registration, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

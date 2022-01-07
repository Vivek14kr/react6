import { AuthContext } from "../contexts/AuthContext";

import { useContext, useState } from "react";
const payload = {
  email: "",
  password: ""
};
export const Form = () => {
  const { isAuth, login, token, register, registration } = useContext(
    AuthContext
  );
  const [data, setData] = useState(payload);

  const handelChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const loginData = (e) => {
    e.preventDefault();
    login(data);
  };
  const registerData = (e) => {
    e.preventDefault();
    registration(data);
  };
  return (
    <div>
      {!register ? (
        <div>
          <h1>Register</h1>
          <form action="" onSubmit={registerData}>
            <input
              type="text"
              onChange={handelChange}
              placeholder="email"
              name="email"
            />
            <br />
            <input
              type="password"
              onChange={handelChange}
              placeholder="password"
              name="password"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      ) : isAuth ? (
        <div>Login sucessfull</div>
      ) : (
        <div>
          <h1>Login</h1>
          <form action="" onSubmit={loginData}>
            <input
              type="text"
              onChange={handelChange}
              placeholder="email"
              name="email"
            />
            <input
              type="password"
              onChange={handelChange}
              placeholder="password"
              name="password"
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};

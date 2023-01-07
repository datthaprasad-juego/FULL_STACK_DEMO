import React, { useReducer } from "react";
import { CustomButton } from "../Button";
import { Input, InputTitle, RegisterNav } from "./styles";
export function Login({ setLoginUi, joinUsHandler }) {
  const [loginData, setLoginData] = useReducer(
    (state, { key, value }) => ({ ...state, [key]: value }),
    { email: "", password: "" }
  );

  const handleInput = (e) => {
    setLoginData({ key: e.target.name, value: e.target.value });
  };

  return (
    <>
      <InputTitle>LOGIN</InputTitle>
      <Input
        placeholder="email"
        name="email"
        value={loginData.email}
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder="password"
        name="password"
        value={loginData.password}
        onChange={(e) => handleInput(e)}
      />
      <CustomButton
        content={"Join Us"}
        marginTop={"1rem"}
        onClick={() =>
          joinUsHandler({
            email: loginData.email,
            password: loginData.password,
            isLogin: 1,
          })
        }
      />
      <RegisterNav onClick={() => setLoginUi(1)}>Register</RegisterNav>
    </>
  );
}

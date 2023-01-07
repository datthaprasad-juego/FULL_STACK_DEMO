import React, { useReducer } from "react";

import { CustomButton } from "../Button";
import { Input, InputTitle, RegisterNav } from "./styles";

export function Register({ joinUsHandler, setLoginUi }) {
  const [registerData, setRegisterData] = useReducer(
    (state, { key, value }) => ({ ...state, [key]: value }),
    { email: "", password: "", confirmPassword: "" }
  );

  const handleInput = (e) => {
    setRegisterData({ key: e.target.name, value: e.target.value });
  };
  return (
    <>
      <InputTitle>REGISTER</InputTitle>
      <Input
        placeholder="email"
        name="email"
        value={registerData.email}
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder="password"
        name="password"
        value={registerData.password}
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder="confirm password"
        name="confirmPassword"
        value={registerData.confirmPassword}
        onChange={(e) => handleInput(e)}
      />
      <CustomButton
        content={"Join Us"}
        marginTop={"1rem"}
        onClick={() =>
          joinUsHandler({
            email: registerData.email,
            password: registerData.password,
          })
        }
      />
      <RegisterNav onClick={() => setLoginUi(0)}>Login</RegisterNav>
    </>
  );
}

import { Register } from "./../../Components/Form/Register";
import { Login } from "./../../Components/Form/Login";
import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

import * as loginJson from "../../Lottie/login.json";
import constants from "../../Constants";
import ThemeContext from "../../Context/themeContext";
import fetch from "../../Hooks/fetch";
import { validateEmailAndPasswordAndName } from "./helper";
import {
  Container,
  InputBox,
  InputContainer,
  LoginContainer,
  LottieContainer,
} from "./styles";

const JoinUs = () => {
  const { setPopup, setUserData, userData } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginUi, setLoginUi] = useState(1);

  useEffect(() => {
    if (userData.access_token) {
      navigate("/");
    }
  }, [userData, navigate]);

  const joinUsHandler = async ({ email, password, isLogin = 0 }) => {
    console.log({ email, password });
    setIsLoading(true);
    const { data, error } = await fetch(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/joinUs",
      "post",
      {
        email,
        password,
        is_login: isLogin,
      }
    );
    setIsLoading(false);
    if (error) alert(error);
    console.log({ data }, "===>");

    if (data && data.verification_mail_sent) {
      setPopup(<h2>Verification mail sent, please verify your mail</h2>, false);
    } else if (data && !data.verification_mail_sent) {
      localStorage.setItem(constants.CRICKET_USER_DATA, JSON.stringify(data));
      setUserData({ ...data });
      navigate("/");
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <LoginContainer>
        <LottieContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loginJson,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={"100%"}
          />
        </LottieContainer>
        <InputContainer>
          <InputBox>
            {!isLoginUi ? (
              <Login joinUsHandler={joinUsHandler} setLoginUi={setLoginUi} />
            ) : (
              <Register joinUsHandler={joinUsHandler} setLoginUi={setLoginUi} />
            )}
          </InputBox>
        </InputContainer>
      </LoginContainer>
    </Container>
  );
};

export default JoinUs;

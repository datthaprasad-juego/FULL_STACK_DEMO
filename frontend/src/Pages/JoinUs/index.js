import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../Components/Button";
import constants from "../../Constants";
import ThemeContext from "../../Context/themeContext";
import fetch from "../../Hooks/fetch";
import { validateEmailAndPasswordAndName } from "./helper";
import { Card, Container, Input, Label, Title } from "./styles";

const JoinUs = () => {
  const { setPopup, setUserData, userData } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData.access_token) {
      navigate("/");
    }
  }, [userData, navigate]);

  const joinUsHandler = async () => {
    //get element by name
    const email = document.getElementById("JoinUsEmail").value;
    const password = document.getElementById("JoinUsPassword").value;
    const name = document.getElementById("JoinUsName").value;

    //Validate email and password
    if (!validateEmailAndPasswordAndName(email, password, name)) return;

    setIsLoading(true);
    const { data, error } = await fetch(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/joinUs",
      "post",
      {
        email,
        password,
        is_login: 1,
        name,
      }
    );
    setIsLoading(false);
    if (error) alert(error);

    if (data && data.verificationMailSent) {
      setPopup(<h2>Verification mail sent</h2>, false);
    }
    if (data && !data.verificationMailSent) {
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
      <Title>Join Us</Title>
      <Card>
        <Label>Name</Label>
        <Input type="text" id="JoinUsName" />

        <Label>Email</Label>
        <Input type="text" id="JoinUsEmail" />

        <Label>Password</Label>
        <Input type="password" id="JoinUsPassword" />

        <CustomButton
          content={"Join Us"}
          marginTop={"1rem"}
          onClick={joinUsHandler}
        />
      </Card>
    </Container>
  );
};

export default JoinUs;

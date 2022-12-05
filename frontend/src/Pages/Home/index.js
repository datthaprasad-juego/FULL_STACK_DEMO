import { JoinUsButton } from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import ModelContainer from "../../Models";
import {
  AutherName,
  Container,
  HeroSubtitle,
  HeroText,
  LoginContainer,
  LoginForm,
  LoginLottieContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import ThemeContext from "../../Context/themeContext";
import constants from "../../Constants";
import Lottie from "react-lottie";

const Home = () => {
  const { userData, setUserData } = useContext(ThemeContext);
  useEffect(() => {
    if (
      (!userData || !userData.access_token) &&
      localStorage.getItem(constants.CRICKET_USER_DATA)
    )
      setUserData(
        JSON.parse(localStorage.getItem(constants.CRICKET_USER_DATA))
      );
  }, [setUserData, userData]);

  return (
    <>
      <ModelContainer />
      <Container>
        <Navbar active="home" />
        <HeroSection />
        {!userData && <MainSection />}
      </Container>

      {/* <ModelContainer />
      <Container>
        <Navbar active="home" />
        <Test />
      </Container> */}
    </>
  );
};

/*<------------- COMPONENTS ------------>*/
function HeroSection() {
  return (
    <>
      <HeroText>Cricket World</HeroText>
      <HeroSubtitle>
        This is 3D world you can interact - Developed by{" "}
        <AutherName>#Dp Shetty</AutherName>
      </HeroSubtitle>
    </>
  );
}

function MainSection() {
  const naviagate = useNavigate();

  return (
    <JoinUsButton marginTop={"1rem"} onClick={() => naviagate("/joinus")} />
  );
}

function Test() {
  return (
    <LoginContainer>
      <LoginLottieContainer>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require("../../Lottie/login.json"),
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width={"100%"}
          height={"100%"}
        />
      </LoginLottieContainer>

      <LoginForm>
        <h1>test</h1>
      </LoginForm>
    </LoginContainer>
  );
}

export default Home;

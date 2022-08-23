import { JoinUsButton } from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import ModelContainer from "../../Models";
import { AutherName, Container, HeroSubtitle, HeroText } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";

const Home = () => {
  const { userData } = useContext(ThemeContext);
  
  return (
    <>
      <ModelContainer />
      <Container>
        <Navbar active="home" />
        <HeroSection />
        <MainSection />
      </Container>
      {/* <Test/> */}
    </>
  );
};
export default Home;

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

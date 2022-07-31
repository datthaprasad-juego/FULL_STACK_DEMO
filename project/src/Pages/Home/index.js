import Navbar from "../../Components/Navbar";
import ModelContainer from "../../Models";
import {
  AutherName,
  Container,
  HeroSubtitle,
  HeroText,
  MainContainer,
  MainText,
} from "./styles";

const Home = () => {
  const navigations = [
    {
      link: "/",
      type: "text",
      content: "Home",
    },
    {
      link: "/test",
      type: "text",
      content: "Play",
    },
    {
      link: "/test2",
      type: "button",
      content: "Logout",
    },
  ];
  return (
    <>
      <ModelContainer />
      <Container>
        <Navbar navigations={navigations} />
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
  return (
    <MainContainer>
      <MainText>JOIN US</MainText>
    </MainContainer>
  );
}

function Test(){
  return <>
    <div style={{flexDirection:"flex-end", width: "100vw",height:"100vh"}}></div>
  </>
}
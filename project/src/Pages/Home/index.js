import { JoinUsButton } from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import ModelContainer from "../../Models";
import { AutherName, Container, HeroSubtitle, HeroText } from "./styles";

const Home = () => {
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
  return <JoinUsButton marginTop={"1rem"} />;
}

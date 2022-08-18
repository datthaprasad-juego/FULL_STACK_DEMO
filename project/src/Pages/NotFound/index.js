import Navbar from "../../Components/Navbar";
import { Code, Container, MainContainer } from "./styles";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <MainContainer>
          <h1>
            <Code>404</Code> PAGE NOT FOUND
          </h1>
        </MainContainer>
      </Container>
    </>
  );
};
export default NotFound;

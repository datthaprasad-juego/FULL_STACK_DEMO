import { CloseButton, Container } from "./styles";
import ReactDOM from "react-dom";
import LoadingBar from "../Components/Loading";
import GlobalStyle from "../Global/styles";

const Popup = ({ setPopup, popupContent, isLoading = 1, home = null }) => {
  return ReactDOM.createPortal(
    <>
      <GlobalStyle />
      <Container>
        {!isLoading && (popupContent || "")}
        {isLoading && <LoadingBar />}
        {!isLoading && (
          <CloseButton
            onClick={() => {
              home ? (window.location = "/") : setPopup();
            }}
          >
            x
          </CloseButton>
        )}
      </Container>
    </>,
    document.getElementById("modal")
  );
};
export default Popup;

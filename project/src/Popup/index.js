import { CloseButton, Container, PopupStyle } from "./styles";
import ReactDOM from "react-dom";
import LoadingBar from "../Components/Loading";

const Popup = ({ setPopup, popupContent, isLoading = 1, home = null }) => {
  return ReactDOM.createPortal(
    <>
      <PopupStyle />
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

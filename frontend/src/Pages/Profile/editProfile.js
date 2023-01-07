import {
  Container,
  Dp,
  Gallery,
  GalleryImage,
  ProfileContainer,
} from "./styles";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import { useNavigate } from "react-router-dom";
import fetch from "../../Hooks/fetch";

const EditProfile = () => {
  useAuth();
  const navigate = useNavigate();

  const { userData } = useContext(ThemeContext);

  const onAvatarSelect = async (e) => {
    e.preventDefault();
    await fetch(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/editProfile",
      "POST",
      { avatar: e.target.id },
      userData.access_token
    );
    navigate("/profile");
  };

  return (
    <>
      <Navbar active="profile" />

      <Container>
        <ProfileContainer>
          <h2>Select avatars</h2>
          <Gallery>
            <GalleryImage>
              <Dp
                src="/images/avatars/dhoni.jpeg"
                onClick={onAvatarSelect}
                id="dhoni.jpeg"
              />
            </GalleryImage>
            <GalleryImage>
              <Dp
                src="/images/avatars/kohli.jpeg"
                onClick={onAvatarSelect}
                id="kohli.jpeg"
              />
            </GalleryImage>
            <GalleryImage>
              <Dp
                src="/images/avatars/rohith.jpeg"
                onClick={onAvatarSelect}
                id="rohith.jpeg"
              />
            </GalleryImage>
            <GalleryImage>
              <Dp
                src="/images/avatars/vijay.jpeg"
                onClick={onAvatarSelect}
                id="vijay.jpeg"
              />
            </GalleryImage>
            <GalleryImage>
              <Dp
                src="/images/avatars/rajini.jpeg"
                onClick={onAvatarSelect}
                id="rajini.jpeg"
              />
            </GalleryImage>
            <GalleryImage>
              <Dp
                src="/images/avatars/rajini.png"
                onClick={onAvatarSelect}
                id="rajini.png"
              />
            </GalleryImage>
          </Gallery>
        </ProfileContainer>
      </Container>
    </>
  );
};
export default EditProfile;

import {
  Badge,
  BadgeContainer,
  Container,
  DpContainer,
  EditIcon,
  EditProfileButton,
  HumanBodyContainer,
  HumanHand,
  HumanImage,
  NamePlate,
  NameValue,
  ProfileContainer,
  ProfileDataContainer,
} from "./styles";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  useAuth();
  const navigate = useNavigate();

  const { userData } = useContext(ThemeContext);
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_BACKEND_ENDPOINT + "/profile",
    "GET",
    {},
    userData.access_token
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Navbar active="profile" />
      <Container>
        <ProfileContainer>
          <EditProfileButton onClick={() => navigate("/editProfile")}>
            <EditIcon src="/images/edit.svg" />
          </EditProfileButton>
          <DpContainer>
            <HumanImage
              src={`${
                data.profileData.avatar
                  ? "/images/avatars/" + data.profileData.avatar
                  : "/images/avatars/rajini.png"
              }`}
            />
          </DpContainer>
          <HumanBodyContainer>
            <HumanHand>
              <HumanImage src="/images/Vector 2.svg" />
            </HumanHand>
            <ProfileDataContainer>
              <BadgeContainer>
                <Badge>
                  <NamePlate>Points</NamePlate>
                  <NameValue>{data.profileData.points}</NameValue>
                </Badge>
                <Badge>
                  <NamePlate>Name</NamePlate>
                  <NameValue>{data.profileData.name}</NameValue>
                </Badge>
              </BadgeContainer>
            </ProfileDataContainer>
            <HumanHand>
              <HumanImage src="/images/Vector 1.svg" />
            </HumanHand>
          </HumanBodyContainer>
        </ProfileContainer>
      </Container>
    </>
  );
};
export default Profile;

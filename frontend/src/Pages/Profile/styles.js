import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
  top: 0;

`;

export const ProfileContainer = styled.div`
  border: 1px solid black;
  width: 80vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
`;
export const DpContainer = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  border: 3px solid black;

  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 40vw;
  }
`;
export const HumanBodyContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 50%;
  }
`;

export const HumanHand = styled.div`
  width: 15%;
  height: 100%;
`;

export const HumanImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileDataContainer = styled.div`
  width: 40%;
  height: 100%;
  background: black;
  margin-left: 5%;
  margin-right: 5%;
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

export const BadgeContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
`;

export const Badge = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export const NamePlate = styled.p`
  color: white;
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameValue = styled.p`
  background: green;
  color: yellow;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfileButton = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled.img`
  width: 60%;
  height: 60%;
`;

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 5%;
  @media only screen and (max-width: 600px) {
    height: 80%;
    width: 100%;
  }

`;

export const GalleryImage = styled.li`
  border-radius: 50%;
  overflow: hidden;
  background: green;
  border: 1px solid blue;
  width: 95%;
  height: 90%;
  display: flex;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
`;

export const Dp = styled.img`
  width: 100%;
  height: 100%;
`;

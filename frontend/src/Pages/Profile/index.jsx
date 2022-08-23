import { Container } from "./styles";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
    useAuth();
    return (
        <>
        <Navbar active="profile" />
        <Container>
            <h1>Profile will coming soon...</h1>
        </Container>
    </>
    );
    }
export default Profile;
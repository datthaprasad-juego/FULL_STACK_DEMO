import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../Context/themeContext";

const useAuth = () => {
  const { userData } = useContext(ThemeContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.access_token) {
      navigate("/");
    }
  }, [userData, navigate]);
};

export default useAuth;

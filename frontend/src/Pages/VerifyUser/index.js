import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import constants from "../../Constants";
import ThemeContext from "../../Context/themeContext";
import useFetch from "../../Hooks/useFetch";

export const VerifyUser = () => {
  const { otp, email } = useParams();
  const { setUserData } = useContext(ThemeContext);
  const navigate = useNavigate();

  const result = useFetch(
    process.env.REACT_APP_BACKEND_ENDPOINT + "/verifyUser",
    "POST",
    {
      otp,
      email,
    }
  );
  if (result.error) {
  } else {
    navigate("/joinUs");
  }

  return (
    <h1 style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      please wait...
    </h1>
  );
};

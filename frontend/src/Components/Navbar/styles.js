import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Conatiner = styled.nav`
  display: flex;
  align-items: space-around;
  width: 100vw;
  height: 10vmin;
  gap: 0%;
`;

export const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const LogoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color};
  width: 3rem;
  font-weight: bold;
  text-decoration: overline;
  user-select: none;
  padding: 1rem;
  margin-top: 1rem;
`;

export const NavigationContainer = styled.ul`
  width: 70%;
  display: flex;
  gap: 1%;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const Navigation = styled.li`
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ active }) => (active ? "rgba(0,0,0,0.5)" : "")};

  @media only screen and (max-width: 600px) {
    width: 30%;
    margin-top: 1vh;
  }
`;

export const Button = styled.a`
  width: 90%;
  padding: 10%;
  border: ${({ theme }) => `0.1rem solid ${theme.color}`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  &:hover {
    background: ${({ theme }) => theme.background};
    transform: skewX(-15deg);
  }
`;
export const Text = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color};
  user-select: none;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    width: 100%;
    height: 0.1rem;
    color: white;
    background-color: ${({ theme }) => theme.color};
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    transform: ${({ active }) => {return active ? `scale(1)` : `scale(0)`}};
    transition: transform 0.2s ease-in;
  }

  &:hover {
    &::after {
      transform: scale(1);
    }
  }
`;

/* <---------------- MOBILE MENU ------------------> */

export const MobileNavContainer = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    width: 70%;

    align-items: center;
    justify-content: flex-end;
  }
`;

export const MobileMenuLogo = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color};
  width: 3rem;
  font-weight: bold;
  user-select: none;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  z-index: 100;
`;
export const MobileMenuNavigations = styled.div`
  transition: all 0.5s ease-in;
  position: absolute;
  width: ${({ show }) => (show ? "100vw" : "0")};
  height: ${({ show }) => (show ? "100vh" : "0")};
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.mobileMenu.background};
  z-index: 1;
  opacity: ${({ show }) => (show ? "1" : "0")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

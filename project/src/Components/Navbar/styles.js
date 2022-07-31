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

  @media only screen and (max-width: 600px) {
    width: 30%;
    margin-top:1vh;
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

export const Text = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color};
  user-select: none;

  &:hover {
    transform: skewX(-15deg);
    text-decoration: underline overline;
  }
`;

export const NavMenu = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    width: 70%;

    align-items: center;
    justify-content: flex-end;
  }
`;

export const Menu = styled.span`
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
export const MobileMenu = styled.div`
  transition: all 0.5s ease-in;
  position: absolute;
  width: ${({ show }) => (show ? "100vw" : "0")};
  height: ${({ show }) => (show ? "100vh" : "0")};
  top: 0;
  right: 0;
  background: ${({theme})=>theme.mobileMenu.background};
  z-index: 1;
  opacity: ${({ show }) => (show ? "1" : "0")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

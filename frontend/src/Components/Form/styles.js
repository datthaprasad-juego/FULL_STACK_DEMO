import styled from "styled-components";

export const InputTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 5%;

  color: #ffffff;
`;

export const Input = styled.input`
  width: 80%;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.themeButton.color};
  box-shadow: 0 0 0.5rem 0.1rem ${({ theme }) => theme.background};
  user-select: none;
  margin-bottom: 1rem;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 2rem;
  }
`;

export const RegisterNav = styled.p`
  margin: 4%;
  text-decoration: underline;
  cursor: pointer;
`;

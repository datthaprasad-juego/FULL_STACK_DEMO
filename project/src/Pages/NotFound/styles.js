import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction; column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 50%;
  height: 50%;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8), 0 0 2rem rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Code = styled.span`
  color: red;
  font-size: 2rem;
  padding: 0.5rem;
  text-decoration: line-through;
  font-weight: bold;
  font-style: italic;
`;

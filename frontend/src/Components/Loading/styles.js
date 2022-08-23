import styled from "styled-components";

export const LoadingBarContainer = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  background-color: transparent;
  border: ${({ theme }) => `${theme.color} solid 1px`};
  backdrop-filter: blur(5px);
`;

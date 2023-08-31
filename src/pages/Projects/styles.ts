import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background-color: ${COLORS.dark.bgLight};

  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Inside = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1032px;
  width: 100%;

  margin-top: 160px;

  header {
    div {
      height: 2px;
      width: 64px;
      background-color: ${COLORS.dark.primary};
      margin-bottom: 16px;
    }

    h1 {
      font-size: 26px;
      font-family: Montserrat;
      font-weight: 600;
      width: 290px;
    }
  }
`;

import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.header`
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
`;

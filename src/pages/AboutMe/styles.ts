import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background-color: ${COLORS.dark.bgLight};

  // Dimensions
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(
        90deg,
        white (25px - 1.8px),
        transparent 1%
      )
      center,
    linear-gradient(white (25px - 1.8px), transparent 1%) center,
    #000000;
  background-size: 25px 25px;
`;

export const Inside = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;

  margin-top: 160px;
`;

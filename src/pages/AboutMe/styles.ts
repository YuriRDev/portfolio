import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background: linear-gradient(180deg, #16161a 0%, #242629 24.44%);


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
`;

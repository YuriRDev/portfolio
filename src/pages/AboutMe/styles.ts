import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background-color: ${COLORS.dark.bg};

  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-top: solid 4px ${COLORS.dark.bgLight};
`;

export const Inside = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1032px;
  width: 100%;

  margin-top: 160px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 33%;

  p {
    color: ${COLORS.dark.gray};
    font-family: Montserrat;
    font-weight: 500;
    margin-top: 24px;
    line-height: 130%;
    font-size: 18px;

    span {
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        font-weight: 600;
        color: #f74c00;
      }
    }
  }
`;

export const RightSide = styled.div`
  width: 50%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
`;

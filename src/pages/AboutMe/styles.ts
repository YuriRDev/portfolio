import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background-color: ${COLORS.dark.bg};

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

export const LeftSide = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  p {
    width: 33%;
    color: ${COLORS.dark.gray};
    font-family: Montserrat;
    font-weight: 500;
    margin-top: 24px;
    line-height: 130%;
    font-size: 18px;

    span {
      cursor: pointer;
      transition: .2s;
      &:hover {
        font-weight: 600;
        color: #f74c00;
      }
    }
  }
`;


export const RightSide = styled.div`
  
`
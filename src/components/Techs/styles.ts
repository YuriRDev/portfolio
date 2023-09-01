import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${COLORS.dark.bgLight};

  margin-bottom: 18px;
  margin-left: 18px;

  padding: 8px 24px;
  border-radius: 4px;

  img {
    height: 26px;
    width: 26px;
    margin-right: 8px;
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    color: ${COLORS.dark.white};
    font-weight: 500;
    font-family: Inter;
  }

  // effecst
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-radius: 10px;
    transform: scale(1.1);
  }
`;

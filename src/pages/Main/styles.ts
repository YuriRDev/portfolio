import { styled } from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
  background: radial-gradient(
      44.95% 34.72% at 88.16% 4.74%,
      rgba(44, 182, 125, 0.16) 0%,
      rgba(44, 182, 125, 0) 69.24%
    ),
    radial-gradient(
      76.54% 39.87% at 3.99% 88.13%,
      rgba(127, 90, 240, 0.15) 0%,
      rgba(127, 90, 240, 0.15) 0.01%,
      rgba(127, 90, 240, 0) 37.3%
    ),
    #16161a;

  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Inside = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;

  margin-top: 160px;
`;

export const TextArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  line-height: 100%;

  h3 {
    color: ${COLORS.dark.gray};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    margin-top: 32px;
    font-weight: 400;
    color: ${COLORS.dark.gray};
  }
`;

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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding-top: 128px;
  h1 {
    font-family: Montserrat;
    font-size: 36px;
    text-align: center;
    color: ${COLORS.dark.white};
    span {
      color: ${COLORS.dark.primary};
    }
    font-weight: 600;
  }
`;

import styled from 'styled-components';
import COLORS from '../../colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 1120px;

  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(
    107.7deg,
    #f2f2f2 0%,
    #eeeeee 49.99%,
    #ffffff 99.37%
  );
  height: 100vh;
  width: 100%;
`;

export const InsideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 100px;
  position: relative;
  width: 1120px;

  margin-left: auto;
  margin-right: auto;

  height: 100%;

`

export const HalfCircle = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 100%;
  background-color: ${COLORS.Background};
  position: absolute;
  top: -28px;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 18px;
  color: ${COLORS.Black4};
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${COLORS.Background};
  font-weight: 600;
  font-size: 28px;
`;

export const Icon = styled.img`
  height: 30px;
  width: 23px;
  margin-right: 16px;
`;

export const ProjectsContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 124px;
`

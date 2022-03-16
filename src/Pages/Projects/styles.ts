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

  @media (max-width: 1140px) {
    width: 100%;
    padding: 0px 20px;
  }

  @media (max-width: 990px) {
    width: 100%;
    padding: 0px 20px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 88px;
    padding: 0px 20px;
  }

  height: 100%;
`;

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
  @media (max-width: 760px) {
    font-size: 14px;
  }
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

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 80px;
  }
`;

import styled from 'styled-components';
import COLORS from '../../colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const HalfCircle = styled.div`
    height: 56px;
    width: 56px;
    border-radius: 100%;
    background-color: ${COLORS.Background};
    position: absolute;
    top: -28px;
`

export const Header = styled.header`
    
`

export const HeaderTitle = styled.div`
    
`

export const Icon = styled.img`
    height: 36px;
    width: 28px;
`
import styled from 'styled-components'
import COLORS from '../../colors'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 140px;
    position: relative;
    width: 1120px;

    margin-left: auto;
    margin-right: auto;
`

export const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;    

    flex-direction: column;

    position: sticky;

`

export const Title = styled.text`
    margin-top: 16px;    

    color: ${COLORS.Light};
    font-size: 32px;
    font-weight: 600;
`

export const Subtitle = styled.text`
    font-size: 18px;
    color: ${COLORS.Gray1};
    margin-top: 4px;
`

export const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    background-color: ${COLORS.Black2};
    border-radius: 5px;
    padding: 12px 18px;
    margin-top: 24px;
`

export const Main = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    flex-direction: column;
`
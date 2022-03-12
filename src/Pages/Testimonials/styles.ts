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

    @media(max-width: 640px) {
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 88px;
        padding: 0px 20px;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;    

    flex-direction: column;

    position: sticky;
    @media(max-width: 640px) {
        position: relative;
        margin-bottom: 48px;
    }

`

export const IconImg = styled.img`
    height: 40px;
    width: 55px;

    @media(max-width: 640px) {
        height: 23px;
        width: 31px;
    }

`

export const Title = styled.text`
    margin-top: 16px;    

    color: ${COLORS.Light};
    font-size: 32px;
    font-weight: 600;

    @media(max-width: 640px) {
        font-size: 18px;
    }
    
`

export const Subtitle = styled.text`
    font-size: 18px;
    color: ${COLORS.Gray1};
    margin-top: 4px;

    @media(max-width: 640px) {
        font-size: 14px;
    }
`

export const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    background-color: ${COLORS.Black2};
    border-radius: 5px;
    padding: 12px 18px;
    margin-top: 24px;

    @media(max-width: 640px) {
        font-size: 12px;
        margin-top: 16px;
    }
`

export const Main = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    flex-direction: column;
`
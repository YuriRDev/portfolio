import styled from "styled-components";

import COLORS from "../../colors";

export const Container = styled.div`
    background-color: #151619;
    border: solid 1px ${COLORS.Black2};

    border-radius: 5px;
    width: 600px;
    padding: 24px 32px;
    margin-bottom: 32px;
    @media(max-width: 640px) {
        width: 100%;
        padding: 16px;
        margin-bottom: 24px;
    }
`

export const Text = styled.text`
    font-size: 14px;
    font-weight: 300;
    color: #F7F2FA;

    @media(max-width: 640px) {
        font-size: 12px;
    }
`

export const PersonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 18px;

    @media(max-width: 640px) {
        margin-top: 16px;
    }
`

export const PersonImg = styled.div`
    height: 48px;
    width: 48px;
    background-color: ${COLORS.Black3};
    border-radius: 100%;
    outline: 1px solid ${COLORS.Primary};
    border: 2px solid ${COLORS.Background};
    margin-right: 16px;
    @media(max-width: 640px) {
        height: 36px;
        width: 36px;
    }


    `


export const PersonData = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const PersonName = styled.text`
    font-size: 16px;
    font-weight: 400;
    @media(max-width: 640px) {
        font-size: 14px;
    }

`
export const PersonStatus = styled.text`
    font-size: 14px;
    font-weight: 600;
    color: ${COLORS.Gray1};
    @media(max-width: 640px) {
        font-size: 12px;
    }
`
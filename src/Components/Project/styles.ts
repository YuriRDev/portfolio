import styled from "styled-components";
import COLORS from "../../colors";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 400px;
    
    color: ${COLORS.Gray2};

    cursor: pointer;
`

export const Tag = styled.text`
    color: ${COLORS.Gray2};
    font-size: 14px;
    font-weight: 500;
`

export const NameContainer = styled.div`
    color: ${COLORS.Background};
    font-size: 18px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const ArrowImg = styled.img`
    height: 16px;
    width: 10px;
`

export const Divider = styled.div`
    border-bottom: solid 1px ${COLORS.Primary};
    width: 100%;
    margin-top: 12px;
`

export const DateRange = styled.text`
    font-size: 12px;
    font-weight: 500;
    margin-top: 8px;
`
import styled from "styled-components";

export const WeeksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 30px;
    z-index: 550;
`;

export const Weeks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
`;

export const arrowLeftIcon = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    cursor: pointer;
`;

export const arrowRightIcon = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    font-size: 22px;
    color: ${(props) => props.theme.text};
    cursor: pointer;
`;

export const Button = styled.button`
    width: 175px;
    padding: 8px 40px;
    /* background-color: ${(props) => props.theme.backgroundMainCard}; */
    background-color: #0095F6;
    border: none;
    border-radius: 15px;
    outline: none;
    /* color: ${(props) => props.theme.text}; */
    color: #FFFFFF;
    cursor: pointer;
`;
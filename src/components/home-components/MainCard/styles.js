import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    z-index: 100;
    `;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.backgroundMainCard};
    color: ${(props) => props.theme.text};
    width: 80%;
    height: 40%;
    position: absolute;
    top: 60px;
    border-radius: 7px;
    padding: 20px;
`;

export const FirstColumn = styled.div`
    padding-left: 10px;
`;

export const SecondColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding-right: 10px; */
    width: 50px;
`;

export const Title = styled.h1`
    font-size: 0.875rem;
    font-weight: 400;
    margin: 0;
`;

export const Value = styled.h2`
    font-size: 1.25rem;
    color: #0095F6;
    margin: 0;
    margin-top: 5px;
`;

export const eyeIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.text};
    font-size: 22px;
    color: #0095F6;
    cursor: pointer;
`;

export const infoAction = styled.span`
    margin-top: 5px;
    font-size: 12px;
`;
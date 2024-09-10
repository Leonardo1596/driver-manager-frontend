import styled from "styled-components";

export const Home = styled.div`
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme.background};
    width: 100vw;
    height: 100vh;
`;

export const ColorBlock = styled.div`
    height: 150px;
    background-color: ${(props) => props.theme.colorBlock};
    position: relative;
    z-index: 500;
`;
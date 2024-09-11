import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 70px;
`;

export const Logo = styled.img`
    width: 160px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;

export const Title = styled.h2`
    font-size: 0.938rem;
    color: ${(props) => props.theme.text};
    font-weight: 500;
    margin: 0;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85vw;

    a {
        text-align: end;
        text-decoration: none;
        color: #0095F6;
        font-size: 0.813rem;

    }
`;

export const Input = styled.input`
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.inputTextColor};
    font-size: 0.75rem;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 15px 15px;
    margin-bottom: 12px;

    &::placeholder {
        font-size: 0.75rem;
        color: ${(props) => props.theme.placeholderColor};
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 0.938rem;
    background-color: #0095F6;
    color: #fff;
    width: 100%;
    padding: 15px 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;

    img {
        width: 20px;
        display: block;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Error = styled.span`
    font-size: 0.813rem;
    color: #ED4956;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Info = styled.p`
    font-size: 0.813rem;
    color: ${(props) => props.theme.text};
`;
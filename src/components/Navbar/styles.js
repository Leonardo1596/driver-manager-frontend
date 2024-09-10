import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    background-color: ${(props) => props.theme.NavbarBackground};
    border-bottom: 1px solid ${(props) => props.theme.NavbarBorderColor};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 15px 20px;
`;

export const HamburgerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: ${(props) => props.theme.NavbarText};
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 60px;
`;

export const UserIcon = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: ${(props) => props.theme.NavbarText};
    cursor: pointer;
`;
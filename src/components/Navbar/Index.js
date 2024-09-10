import React from 'react';
import * as C from './styles';
import { FaRegCircleUser, FaBars } from "react-icons/fa6";
import logoWhite from '../../assets/logo-navbar-white.png'
import logoBlack from '../../assets/logo-navbar-black.png'

const Index = ({ theme }) => {
    return (
        <div>
            <C.Header>
                <C.Nav>
                    <C.HamburgerIcon><FaBars /></C.HamburgerIcon>
                    <C.Logo src={theme === 'light' ? logoBlack : logoWhite} />
                    <C.UserIcon><FaRegCircleUser /></C.UserIcon>
                </C.Nav>
            </C.Header>
        </div>
    )
}

export default Index
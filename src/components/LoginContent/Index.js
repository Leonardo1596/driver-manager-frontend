import React, { useRef, useState } from 'react';
import * as C from './styles';
import logoWhite from '../../assets/logo-driver-manager-white.png'
import logoBlack from '../../assets/logo-driver-manager-black.png'
import loadingGif from '../../assets/loading.gif';

const Index = ({ login, errorMessage, loading, theme }) => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleButton() {
        let body = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        login(body);
    };

    return (
        <div>
            <C.LogoContainer>
                <C.Logo src={theme === 'light' ? logoBlack : logoWhite} />
            </C.LogoContainer>
            <C.TitleContainer>
                <C.Title>Faça login em sua conta</C.Title>
            </C.TitleContainer>
            <C.Form>
                <C.Input type="email" placeholder='Email' ref={emailRef} />
                <C.Input type="password" placeholder='Senha' ref={passwordRef} />
                <a href="#">Esqueceu sua senha?</a>
                <C.Button onClick={handleButton}>
                    {loading ? <img src={loadingGif} /> : 'Entrar'}
                </C.Button>
                <C.ErrorContainer>
                    <C.Error>{errorMessage}</C.Error>
                </C.ErrorContainer>
                <C.InfoContainer>
                    <C.Info>Não tem uma conta? <a href='/cadastrar'>Inscrever-se</a></C.Info>
                </C.InfoContainer>
            </C.Form>
        </div>
    )
}

export default Index
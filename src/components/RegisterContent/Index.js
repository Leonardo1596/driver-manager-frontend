import React, { useRef } from 'react';
import * as C from './styles';
import logoBlack from '../../assets/logo-driver-manager-black.png';
import loadingGif from '../../assets/loading.gif';

const Index = ({ register, errorMessage, setErrorMessage, loading }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    function handleButton() {
        let body = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        };
        register(body);
    };

    return (
        <div>
            <C.LogoContainer>
                <C.Logo src={logoBlack} />
            </C.LogoContainer>
            <C.TitleContainer>
                <C.Title>Crie a sua conta</C.Title>
            </C.TitleContainer>
            <C.Form>
                <C.Input type="text" placeholder='Nome' ref={nameRef} />
                <C.Input type="email" placeholder='Email' ref={emailRef} />
                <C.Input type="password" placeholder='Senha' ref={passwordRef} />
                <C.Input type="password" placeholder='Confirmar Senha' ref={confirmPasswordRef} />
                <C.Button onClick={handleButton}>
                {loading ? <img src={loadingGif} /> : 'Criar conta'}
                </C.Button>
                <C.ErrorContainer>
                    <C.Error>{errorMessage}</C.Error>
                </C.ErrorContainer>
                <C.InfoContainer>
                    <C.Info>Já tem uma conta? <a href='/entrar'>Fazer login</a></C.Info>
                </C.InfoContainer>
            </C.Form>
        </div>
    )
}

export default Index
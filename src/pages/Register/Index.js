import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import RegisterContent from '../../components/RegisterContent/Index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/RegisterContent/themes';

const Index = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Detect system preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);

        // Listener for system theme changes
        const themeChangeListener = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener);
        };
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function register(body) {
        setLoading(true);
        setErrorMessage('');

        if (body.confirmPassword !== body.password) {
            setLoading(false);
            setErrorMessage('');
            setErrorMessage('As senhas não são iguais');
            return;
        }

        axios.post('https://driver-manager-backend.onrender.com/auth/sign-up', body)
            .then(response => {
                console.log(response.data);
                if (response.data.token === undefined) {
                    setLoading(false)
                    setErrorMessage('');
                    setErrorMessage(response.data.message);
                } else {
                    setErrorMessage('');
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                const error = err.response.data.error
                    .replace('password', 'senha')
                    .replace('name', 'nome')
                setErrorMessage(error);
            });
    };

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <C.Register>
                    <RegisterContent register={register} errorMessage={errorMessage} setErrorMessage={setErrorMessage} loading={loading} theme={theme} />
                </C.Register>
            </ThemeProvider>
        </div>
    )
}

export default Index
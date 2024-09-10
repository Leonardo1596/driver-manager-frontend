import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import LoginContent from '../../components/LoginContent/Index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/LoginContent/themes';

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

    function login(body) {
        setLoading(true);
        setErrorMessage('');
        axios.post('https://driver-manager-backend.onrender.com/auth/sign-in', body)
            .then(response => {
                // console.log(response.data);
                if (response.data.token === undefined) {
                    setLoading(false)
                    setErrorMessage('');
                    setErrorMessage(response.data.message);
                    return;
                }
                setErrorMessage('');
                localStorage.setItem('userId', response.data.userInfo._id);
                window.location.href = "/inicio"
            })
            .catch(err => {
                // console.log(err.response.data);
                setLoading(false);
                const error = err.response.data.error.replace('password', 'senha');
                setErrorMessage(error);
            });
    };

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <C.Login>
                    <LoginContent login={login} errorMessage={errorMessage} loading={loading} theme={theme} />
                </C.Login>
            </ThemeProvider>
        </div>
    )
}

export default Index
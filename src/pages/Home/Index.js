import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import Navbar from '../../components/Navbar/Index';
import Weeks from '../../components/Weeks/Index';
import MainCard from '../../components/home-components/MainCard/Index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/home-components/themes';

const Index = () => {
    const [theme, setTheme] = useState('dark');
    const [currentDate, setCurrentDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salaryValue, setSalaryValue] = useState('');

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

    function getCurrentDate(currentDate, endDate) {
        setCurrentDate(currentDate);
        setEndDate(endDate);
    };

    useEffect(() => {
        function getEntriesByDate() {
            const userId = localStorage.getItem('userId');

            axios.get(`https://driver-manager-backend.onrender.com/report/entries/${userId}?startDate=${currentDate}&endDate=${endDate}`)
                .then(response => {
                    // console.log(response.data);
                    setSalaryValue(response.data.totalLiquidGain.toFixed(2));
                })
                .catch(error => {
                    console.error(error);
                });
        }

        function getWeeklyReport() {
            const userId = localStorage.getItem('userId');
            setSalaryValue('');

            axios.get(`https://driver-manager-backend.onrender.com/weekly-report/${userId}?startDate=${currentDate}`)
                .then(response => {
                    // console.log(response.data);
                    if (response.data.length === 0) {
                        getEntriesByDate();
                        return;
                    }

                    setSalaryValue(response.data.length === 0 ? '0.00' : response.data[0].goalsAccumulated[0].weeklyAccumulated.toFixed(2));
                })
                .catch(error => {
                    console.error(error);
                });
        };
        getWeeklyReport();
    }, [currentDate]);

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <C.Home>
                    <Navbar theme={theme} />
                    <C.ColorBlock>
                        <Weeks getCurrentDate={getCurrentDate} />
                        <MainCard value={salaryValue ? salaryValue : '0.00'} />
                    </C.ColorBlock>
                </C.Home>
            </ThemeProvider>
        </div>
    )
}

export default Index
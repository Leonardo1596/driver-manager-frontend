import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import RegisterContent from '../../components/RegisterContent/Index';

const Index = () => {
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
            <C.Register>
                <RegisterContent register={register} errorMessage={errorMessage} setErrorMessage={setErrorMessage} loading={loading} />
            </C.Register>
        </div>
    )
}

export default Index
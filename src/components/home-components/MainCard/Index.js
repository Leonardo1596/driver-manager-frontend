import React, { useState } from 'react';
import * as C from './styles';
import { FaEye, FaEyeSlash, FaEllipsis } from "react-icons/fa6";

const Index = ({ value }) => {
    const [eyeIsClosed, setEyeIsClosed] = useState(false);

    const toggleEyeIcon = () => {
        setEyeIsClosed(!eyeIsClosed);
    }
    return (
        <div>
            <C.CardContainer>
                <C.Card>
                    <C.FirstColumn>
                        <C.Title>Salário</C.Title>
                        <C.Value>{eyeIsClosed ? 'R$ ******' : `R$ ${value.replace('.', ',')}`}</C.Value>
                    </C.FirstColumn>
                    <C.SecondColumn>
                        <C.eyeIcon>{eyeIsClosed ? <FaEye onClick={toggleEyeIcon} /> : <FaEyeSlash onClick={toggleEyeIcon} />}</C.eyeIcon>
                        <C.infoAction>{eyeIsClosed ? 'Mostrar' : 'Ocultar'}</C.infoAction>
                    </C.SecondColumn>
                </C.Card>
            </C.CardContainer>
        </div>
    )
}

export default Index
import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Index = ({ value, goals }) => {
    const [eyeIsClosed, setEyeIsClosed] = useState(false);
    const salaryGoal = goals && goals.find(obj => obj.isDefault === true);
    const [progressValue, setProgressValue] = useState(0);

    const toggleEyeIcon = () => {
        setEyeIsClosed(!eyeIsClosed);

    }

    useEffect(() => {
        if (salaryGoal && salaryGoal.limit) {
            setProgressValue(value / salaryGoal.limit);
        } else {
            setProgressValue(0);
        }
    }, [salaryGoal, value]);

    return (
        <div>
            <C.CardContainer>
                <C.Card>
                    <C.MainContent>
                        <C.FirstColumn>
                            <C.Title>Salário</C.Title>
                            <C.Value>{eyeIsClosed ? 'R$ ******' : `R$ ${value.replace('.', ',')}`}</C.Value>
                        </C.FirstColumn>
                        <C.SecondColumn>
                            <C.eyeIcon>{eyeIsClosed ? <FaEye onClick={toggleEyeIcon} /> : <FaEyeSlash onClick={toggleEyeIcon} />}</C.eyeIcon>
                            <C.infoAction>{eyeIsClosed ? 'Mostrar' : 'Ocultar'}</C.infoAction>
                        </C.SecondColumn>
                    </C.MainContent>
                    <C.Progress>
                        <C.ProgressBarContainer>
                            <C.ProgressBar progress={!eyeIsClosed ? Math.round(progressValue * 100 || 0) : 0} />
                        </C.ProgressBarContainer>
                        <span>{!eyeIsClosed ? Math.round(progressValue * 100 || 0) : 0}%</span>
                    </C.Progress>
                </C.Card>
            </C.CardContainer>

        </div>
    )
}

export default Index
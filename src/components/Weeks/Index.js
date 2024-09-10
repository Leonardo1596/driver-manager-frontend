import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { format, addWeeks, subWeeks, startOfWeek, endOfWeek, isSameWeek } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Index = ({ getCurrentDate }) => {
    const [currentWeek, setCurrentWeek] = useState(new Date());

    const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 1 });
    const endOfCurrentWeek = endOfWeek(currentWeek, { weekStartsOn: 1 });

    const formattedStart = format(startOfCurrentWeek, 'dd MMM', { locale: ptBR });
    const formattedEnd = format(endOfCurrentWeek, 'dd MMM', { locale: ptBR });

    // Check if displayed week is current week
    const isCurrentWeek = isSameWeek(currentWeek, new Date(), { weekStartsOn: 0 });

    const handleNextWeek = () => {
        setCurrentWeek(addWeeks(currentWeek, 1));
    };

    const handlePrevWeek = () => {
        setCurrentWeek(subWeeks(currentWeek, 1));
    };

    const startFormattedDate = format(startOfCurrentWeek, 'yyyy-MM-dd');
    const endFormattedDate = format(endOfCurrentWeek, 'yyyy-MM-dd');

    useEffect(() => {
        getCurrentDate(startFormattedDate, endFormattedDate);
    }, [startFormattedDate]);
    

    return (
        <div>
            <C.WeeksContainer>
                <C.Weeks>
                    <C.arrowLeftIcon onClick={handlePrevWeek}><FaAngleLeft /></C.arrowLeftIcon>
                    <C.Button>{isCurrentWeek ? 'Semana atual' : `${formattedStart} - ${formattedEnd}`}</C.Button>
                    <C.arrowRightIcon onClick={handleNextWeek}><FaAngleRight /></C.arrowRightIcon>
                </C.Weeks>
            </C.WeeksContainer>
        </div>
    )
}

export default Index
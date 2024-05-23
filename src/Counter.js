import React, { useEffect } from 'react';
import { StyledH1Number } from './StyledComponents.js';

function Counter({number, updateNumber, isActive}){

    useEffect(() => {
        let intervalId;
        let previousNumber = number;
        if (isActive) {
            intervalId = setInterval(() => {
                let newNumber;
                do {
                    newNumber = Math.floor(Math.random() * 11);
                } while (newNumber === previousNumber);
                updateNumber(newNumber);
                previousNumber = newNumber;
            }, 2000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, number, updateNumber]);

    
    return (
        <StyledH1Number>{number}</StyledH1Number>
    )

};

export default Counter;



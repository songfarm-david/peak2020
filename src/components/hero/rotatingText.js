import React, { useState, useEffect, createRef } from "react";
import PropTypes from 'prop-types';

import "./rotatingText.scss";

const RotatingText = ({word, active, wasActive}) => {

    const [letters] = useState(() => {
        if (word.indexOf(" ") === -1) return word.split('');
        return word.replace(/ /g, '\u00a0').split('');
    });
    const [firstRun] = useState(() => {
        let firstRun = true;
        return (val) => {
            if (val === undefined) return firstRun;
            return firstRun = val
        }
    });
    const [classNames] = useState(() => {
        const classes = Array(word.length).fill('').map(() => active ? 'in' : 'out');
        return (active, idx) => {
            if (idx === undefined) return classes;
            classes[idx] = active ? 'in' : 'out';
            return classes; 
        }
    });
    const [elRefs] = useState(() => {
        const refArray = Array(letters.length).fill('').map((_, i) => createRef());       
        return (idx) => refArray[idx]
    });

    useEffect(() => {
        if (!firstRun() && (active || wasActive)) {
            const getTimeSpan = (i) => active
                ? 340 + (i * 80)
                : (i * 80);
            letters.forEach((_, i) => {
                const timeSpan = getTimeSpan(i);
                const timeoutHandler = curLetter => () => {
                    elRefs(curLetter).current.classList.toggle(classNames()[curLetter]);
                    elRefs(curLetter).current.classList.toggle(classNames(active, curLetter)[curLetter]);
                }
                setTimeout(timeoutHandler(i), timeSpan);
            });
        }        
        firstRun(false);
    }, [word, active, wasActive, letters, firstRun, elRefs, classNames]);
    
    return (
        <React.Fragment>
            {letters.map((letter, i) => {
                const curClass = classNames()[i];
                return (
                    <span ref={elRefs(i)} key={`letter-${i}`} className={`letter ${curClass}`}>
                        {letter}
                    </span>
                )
            })}
        </React.Fragment>
    )
}

RotatingText.propTypes = {
    word: PropTypes.string,
    active: PropTypes.bool,
    wasActive: PropTypes.bool
};

export default RotatingText

// https://github.com/Js-Brecht/react-rotate-words-animated
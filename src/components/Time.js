import React from 'react';

const Time = ({ onTimeButtonClick, basicArray }) => {

    const handleClick = (min) => {
        onTimeButtonClick(min);
    };

    function affichage(minutes) {
        let seconds;
        let min;
        let sec;
        seconds = Math.floor(minutes * 60);
        min = Math.floor(minutes);
        sec = seconds % 60;
        if (sec === 0) {
            return `${min}'`
        };
        if (min === 0) {
            return `${sec}"`
        };
        return `${min}'${sec}"`
    };
    return (
        <div id="time">
            {basicArray.map((item, index) => (
                <button
                    key={`${index}`}
                    id={`${index}`}
                    value={item.min}
                    name={item.min}
                    onClick={() => handleClick(item.min)}
                >
                    {affichage(item.min)}
                </button>
            ))}
        </div>
    );
};

export default Time;
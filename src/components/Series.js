import React, { useState } from 'react';
import Time from './Time';
import Timer from './Timer';

const Series = ({ basicArray }) => {
    const [showTimer, setShowTimer] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null)
    const [buttonValue, setButtonValue] = useState(null);

    const handleButtonClick = (value) => {
        setActiveButton(value);
        setButtonValue(value);
    };

    const handleTimerStop = () => {
        setButtonValue(prevValue => prevValue !== null ? prevValue + 1 : null);
        setShowTimer(false);
    };

    const handleTimerFinish = () => {
        setShowTimer(false);
    }

    const handleTimeButtonClick = (value) => {
        setSelectedTime(value)
        if (buttonValue !== null) {
            setButtonValue(prevValue => prevValue !== null ? prevValue - 1 : null);
        }
        setShowTimer(true);
    };

    return (
        <section>
            <div id="serie" className="reverse">
                {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                    <button
                        key={`s${value}`}
                        id={`s${value}`}
                        value={value === buttonValue ? "On" : "Off"}
                        title={value === buttonValue ? "On" : "Off"}
                        className={value === buttonValue ? "active" : ""}
                        onClick={() => handleButtonClick(value)}
                    >
                        {value}
                    </button>
                ))}
            </div>
            {!showTimer ? (
                <Time basicArray={basicArray} onTimeButtonClick={handleTimeButtonClick} />
            ) : (
                <Timer duration={selectedTime} onStopButtonClick={handleTimerStop} onStopFinished={handleTimerFinish} />
            )}
        </section>
    );
};

export default Series;
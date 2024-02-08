import React, { useEffect, useState } from 'react';
import fiveSecondsSound from '../assets/media/5sec.mp3';
import finishedSound from '../assets/media/ring.mp3';

const Timer = ({ duration, onStopButtonClick, onStopFinished }) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60);
    const fiveSecondsAudio = new Audio(fiveSecondsSound);
    const finishedAudio = new Audio(finishedSound);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft > 0) {
                    if (prevTimeLeft <= 6 && prevTimeLeft > 1) {
                        fiveSecondsAudio.play();
                    }
                    if (prevTimeLeft <= 1) {
                        finishedAudio.play();
                    }
                    return prevTimeLeft - 1;
                } else {
                    clearInterval(timer);
                    onStopFinished();
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [duration, onStopButtonClick]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div id="timer">
            <div id="chrono">
                {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
            </div>
            <button className="stop" onClick={onStopButtonClick}>STOP</button>
        </div>
    );
};

export default Timer;
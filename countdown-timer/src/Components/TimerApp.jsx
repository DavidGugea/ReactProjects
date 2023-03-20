import { useRef, useState } from "react";

import TimerControlButtons from "./TimerControlButtons";
import TimerDisplay from "./TimerDisplay";

export default function TimerApp() {
    const timerSecondsPassed = useRef(0);
    const timerInterval = useRef(null);

    const [timerData, setTimerData] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [timeStartFlag, setTimeStartFlag] = useState(false);

    const startFunction = () => {
        if (timeStartFlag) {
            return;
        }

        setTimeStartFlag(true);

        timerInterval.current = setInterval(() => {
            ++timerSecondsPassed.current;

            setTimerData({
                hours: parseInt(timerSecondsPassed.current / 3600, 10),
                minutes: parseInt(timerSecondsPassed.current / 60, 10),
                seconds: timerSecondsPassed.current % 60,
            });
        }, 1000);
    };

    const stopFunction = () => {
        setTimeStartFlag(false);

        clearInterval(timerInterval.current);
        timerInterval.current = null;
    };

    const resetFunction = () => {
        setTimeStartFlag(false);
        setTimerData({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        timerSecondsPassed.current = 0;
        clearInterval(timerInterval.current);
        timerInterval.current = null;
    };

    return (
        <div className="w-screen h-screen bg-timerRed flex flex-col justify-top items-center font-roboto text-timerWhite">
            <h1 className="mt-20 mb-20 text-4xl">Timer</h1>
            <TimerControlButtons
                stopFunction={stopFunction}
                startFunction={startFunction}
                resetFunction={resetFunction}
            />
            <TimerDisplay timerData={timerData} />
        </div>
    );
}

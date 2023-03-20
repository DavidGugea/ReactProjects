export default function TimerControlButtons({
    startFunction,
    stopFunction,
    resetFunction,
}) {
    return (
        <div className="flex flex-row gap-20 mb-20">
            <button
                onClick={stopFunction}
                className="w-32 h-10 bg-timerBlue border border-[#000000] rounded-2xl"
            >
                Stop
            </button>
            <button
                onClick={startFunction}
                className="w-32 h-10 bg-timerGreen border border-[#000000] rounded-2xl"
            >
                Start
            </button>
            <button
                onClick={resetFunction}
                className="w-32 h-10 bg-timerBlue border border-[#000000] rounded-2xl"
            >
                Reset
            </button>
        </div>
    );
}

export default function TimerDisplay({ timerData }) {
    const padTimeString = (timeNumber) => {
        if (timeNumber.toString().length < 2) {
            return `0${timeNumber}`;
        }

        return timeNumber;
    };

    return (
        <h1 className="mt-36 font-roboto text-4xl">
            {padTimeString(timerData.hours)}:{padTimeString(timerData.minutes)}:
            {padTimeString(timerData.seconds)}
        </h1>
    );
}

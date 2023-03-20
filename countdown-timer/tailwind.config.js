/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            }
        },
        colors: {
            timerRed: '#cc6666',
            timerWhite: '#eff9f9',
            timerGreen: '#66cc99',
            timerBlue: '#66cccc'
        }
    },
    plugins: [],
};

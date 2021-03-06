import React from 'react';

type Props = {
    darkTheme: boolean;
    setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeBtn = ({darkTheme, setDarkTheme}: Props) => {
    return (
        <button className="fixed bottom-0 right-0 mb-2 mr-2 bg-blue-700 rounded-full h-12 w-12 opacity-80 z-10" onClick={() => {
            const html = document.querySelector('html');
            html?.classList.toggle('dark');
            setDarkTheme(!darkTheme);
        }
        }>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white opacity-100">
                <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"/>
            </svg>
        </button>
    );
}

export default ThemeBtn;
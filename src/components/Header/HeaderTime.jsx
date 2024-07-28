import React, { useState, useEffect } from 'react'

export default function HeaderTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours} : ${minutes} : ${seconds}`;
    }

    return (
        <div className='w-full lg:w-1/2 text-center text-sm lg:text-base py-4'>
            <p className='font-poor text-xl'>Based in Malang, East Java, Indonesia</p>
            <p className='h-1/2'>Current Time : {formatTime(time)}</p>
        </div>
    )
}

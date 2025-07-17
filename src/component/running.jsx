import React, { useRef, useEffect, useState } from 'react';
let intervalID = undefined; 
function Running({ time, running, repeat , setRepeat , setRunning }) {
    const lineRef = useRef(null); 
    const [process, setProcess] = useState(0); 
    const [transition, setTransition] = useState(true) 
    useEffect(() => {
        clearTimeout(intervalID); 
        if (running && process == time) {
            setRepeat(true) 

        }
        if (process < time && running)
        {   
            intervalID = setInterval(() => {
                setProcess(prev => 1 + prev)
            }, 1000)
        }
        else setRunning(false); 
        return () => {clearInterval(intervalID)}
    }, [process , running])
    useEffect(() => {
        if (repeat) 
        {
            clearInterval(intervalID); 
            setProcess(0); 
            setTransition(false) 
            setTimeout(() => {
                setTransition(true);
            }, 0);
            setRepeat(false);
        }
    } , [repeat])
    let translateX = (lineRef.current)? process * (lineRef.current.getBoundingClientRect().width) / time : 0; 
    return (
        <div
            ref = {lineRef}
            className="time__line h-1 flex items-center w-full bg-white rounded-2xl mt-10 relative"
        >
            <div
                className={`rounded-full w-4 h-4 bg-white absolute                 
                ${transition? 'transition-transform duration-1000 ease-linear' : ''}`}
                style={{
                    transform: `translateX(${translateX}px)`,
                }}
            />
        </div>
    );
}

export default Running;

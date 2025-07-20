import React, { useRef, useEffect, useState } from 'react';
let intervalID = undefined; 
function Running({ time, running, repeat , setRepeat , setRunning , roundedDisc }) {
    const lineRef = useRef(null); 
    const [process, setProcess] = useState(0); 
    const [transition, setTransition] = useState(true) 
    const [rotate , setRotate] = useState(0); 
    let currentTimeLine = useRef(null) //currentTime Line dung de tham chieu toi vi tri hien tai cua con chay nhac 
    let translateX = (lineRef.current)? process * (lineRef.current.getBoundingClientRect().width) / time : 0; 
    let rotateDeg = (lineRef.current)? ((360 / (time)) * process) : 0;   //1 vong di roi sau do hay lap di lap lai 1 vong nay 
    useEffect(() => {
        clearTimeout(intervalID); 
        if (running && process == time) {
            setRepeat(true) 
            roundedDisc.style.transition = 'none'; 
            roundedDisc.style.transform = `rotate(0deg)`   //OK 
        }
        if (process < time && running)
        {   
            intervalID = setInterval(() => {
                setProcess(prev => 1 + prev)
            }, 1000)
        }
        else {
            setRunning(false); 
            // if (roundedDisc) roundedDisc.style.transform = `rotate(${rotateDeg}deg)`
        }
        return () => {clearInterval(intervalID)}
    }, [process , running])

    useEffect(() => {
        if (repeat) 
        {
            clearInterval(intervalID); 
            if (roundedDisc) {
                roundedDisc.style.transition = 'border-radius 0.4s linear'; 
                roundedDisc.style.transform = 'rotate(0deg)'  //Dat lai ve vi tri ban dau 
            }
            setRepeat(false);
            setProcess(0); 
            setTransition(false) 
            setTimeout(() => {
                setTransition(true);
            }, 0);
        }
    } , [repeat])

    
    useEffect(() => {
  if (roundedDisc) {
    if (running) 
    {
        // roundedDisc.style.transform = 'rotate(0)deg'
        roundedDisc.style.transition = 'transform 1s linear'
        roundedDisc.style.transform = ` rotate(${rotateDeg}deg)`;
    }
  }
}, [rotateDeg]);

    console.log('>>> Check rounded-disc' , roundedDisc) 
    return (
        <div
            ref = {lineRef}
            className="time__line h-1 flex items-center w-full bg-white rounded-2xl mt-10 relative"
        >
            <div
                className={`rounded-full w-4 h-4 bg-white absolute time__line__in                
                ${transition? 'transition-transform duration-1000 ease-linear' : ''}`}
                style={{
                    transform: `translateX(${translateX}px)`,
                }}
            />
        </div>
    );
}

export default Running;

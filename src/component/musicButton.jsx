import React, { useEffect, useSyncExternalStore } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Running from './running'
function MusicButton({time , change})  //change chinh la bien bieu dien cho su thay doi -> truyen vo id cua bai hat 
{
    const [play, setPlay] = useState(false) 
    const [repeat, setRepeat] = useState(false)  //Thang nay 

    useEffect(() => {
        setRepeat(true); //bat repeat len 
        setPlay(false); //tat nhac di 
    }, [change])
    const handleClick = () => {
        if (play == false) 
        {
            document.querySelector('.core__audio__player').play(); 
            setPlay(true) 
        }
        else {
            document.querySelector('.core__audio__player').pause(); 
            setPlay(false)
        }
        
    }
    const handleRepeat = () => {
        document.querySelector('.core__audio__player').load(); 
        setRepeat(true)   //bat co repeat len 
        setPlay(false) 
    }
    return (
        <React.Fragment>
            <div className = "my-4 flex text-3xl items-center w-full justify-evenly gap-4">
                <i className="fa-brands fa-soundcloud text-xl"></i>
                <i className="fa-solid fa-backward cursor-pointer"></i>
                <div className="w-[48px] text-5xl flex justify-center items-center">
                    {(play)
                    ? <i className="fa-solid fa-play cursor-pointer" onClick={handleClick}></i>
                    : <i className="fa-solid fa-pause cursor-pointer" onClick={handleClick}></i>}
                </div>
                <i className="fa-solid fa-forward cursor-pointer"></i>
                <i className="fa-solid fa-repeat text-xl cursor-pointer" onClick = {handleRepeat}></i>
            </div>
            <Running running = {play} time={time} repeat = {repeat} setRepeat = {setRepeat}  setRunning = {setPlay}/> 
        </React.Fragment>
    )
}
export default MusicButton
import React, { useEffect, useSyncExternalStore } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Running from './running'
import { handleSkip } from '../services/SkipMusic/Skip'
let roundedDisc = null 
function MusicButton({time , change})  //change chinh la bien bieu dien cho su thay doi -> truyen vo id cua bai hat 
{
    const [process, setProcess] = useState(0);
    const [seek, setSeek] = useState(false);
    const [play, setPlay] = useState(false) 
    const [repeat, setRepeat] = useState(false)  //Thang nay 
    const [roundedDisc , setRoundedDisc] = useState(null)  
    useEffect(() => {
        setRepeat(true); //bat repeat len 
        setPlay(false); //tat nhac di 
        setRoundedDisc(prev => {
            if (prev) {
                prev.style.transition = 'none'
                prev.style.transition = 'border-radius 0.4s ease-in-out'; 
                prev.style.transform = 'rotate(0deg)' 
            } 
            return document.querySelector('.rounded-disc div')
        })
        // roundedDisc = document.querySelector('.rounded-disc div') 
    }, [change])
    useEffect(() => {
        setRepeat(false)   //Moi lan set repeat ve false thi no lai ghi de -> Phai co cai gi do de xu li no khong phai la lan mount dau tien 
    } , [])
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
                <i className="fa-solid fa-backward cursor-pointer"
                   onClick = {() => handleSkip('back', setProcess , setSeek)}
                ></i>
                <div className="w-[48px] text-5xl flex justify-center items-center">
                    {(play)
                    ? <i className="fa-solid fa-play cursor-pointer" onClick={handleClick}></i>
                    : <i className="fa-solid fa-pause cursor-pointer" onClick={handleClick}></i>}
                </div>
                <i className="fa-solid fa-forward cursor-pointer"
                   onClick = {() => handleSkip('next', setProcess , setSeek)}
                ></i>
                <i className="fa-solid fa-repeat text-xl cursor-pointer" onClick = {handleRepeat}></i>
            </div>
            <Running running = {play} time={time} repeat = {repeat} process = {process} seek = {seek}
            setRepeat = {setRepeat} roundedDisc={roundedDisc} setProcess={setProcess} setSeek={setSeek}
            setRunning = {setPlay}/> 
        </React.Fragment>
    )
}
export default MusicButton
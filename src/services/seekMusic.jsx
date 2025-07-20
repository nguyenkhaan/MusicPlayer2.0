function handleClickSeek(e , timeline , point , setProcess)  
{
    const rect = timeline?.current.getBoundingClientRect() 
    const clickX = e.clientX - rect.left; 
    const audio = document.querySelector('.core__audio__player') 
    let newTime = (clickX / rect.width) * audio.duration 
    audio.currentTime = newTime 
    setProcess(newTime); 
} 
export {handleClickSeek}
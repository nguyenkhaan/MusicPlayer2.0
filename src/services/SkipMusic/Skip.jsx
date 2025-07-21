function handleSkip(dir, setProcess , setSeek) 
{
    const audio = document.querySelector('.core__audio__player') 
    const maxBounding = audio.duration 
    if (dir === 'next') 
    {
        setProcess((prev) => {
            let token = Math.min(prev + 5 , maxBounding) 
            audio.currentTime = token 
            
            return token 
        })
        setSeek(true); 
    } 
    else 
    {
        setProcess((prev) => {
            let token = Math.max(0 , prev - 5) 
            audio.currentTime = token 
            return token; 
        }) 
        setSeek(true); 
    }
} 

export {handleSkip}
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Album from '../component/album'
import Menu from '../component/menu'
import Background from '../component/background'
//API fetch duoc 
const playLists = [
    {
        id: 1, //danh so bai hat
        duration: 86, 
        musicName: 'WINNER!!! - Gozyuger', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYDy76KY4KtQ1aGMouAY5fcPbCryw2PlkMw&s', 
        audio: '/audio/audio_test_1.mp3'
    }, 
    {
        id: 2, 
        duration: 90, 
        musicName: 'Precious time Glory days', 
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/729/818/470/judai-yuki-yu-gi-oh-yu-gi-oh-gx-hd-wallpaper-preview.jpg', 
        audio: '/audio/audio_test_2.mp3'
    }, 
    {
        id: 3, 
        duration: 68, 
        musicName: 'Be The One - KR Build', 
        imageUrl: 'https://images.spiderum.com/sp-images/e10f35d0dc3411e7a6307122b908f813.jpg', 
        audio: '/audio/audio_test_3.mp3'
    },
    {
        id: 4, 
        duration: 73, 
        musicName: 'Anything Goes', 
        imageUrl: 'https://i.pinimg.com/originals/b5/77/d4/b577d4ddbd116ed22aa553298d538c9f.jpg', 
        audio: '/audio/audio_test_4.mp3'
    }, 
    {
        id: 5, 
        duration: 214, 
        musicName: 'Dragon Ball GT', 
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/109/220/12/dragon-ball-dragon-ball-super-ultra-instinct-son-goku-wallpaper-preview.jpg', 
        audio: '/audio/audio_test_5.mp3'
    }, 
        {
        id: 6, 
        duration: 257, 
        musicName: 'Overlap - Yugioh', 
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/183/384/1024/yu-gi-oh-anime-yami-yugi-hd-wallpaper-preview.jpg', 
        audio: '/audio/audio_test_6.mp3'
    }, 
]
function Music()
{
    let [music, setMusic] = useState({
        id: 0, 
        duaration: 0, 
        musicName: '', 
        imageUrl: '', 
        audio: '', 
    })
    const handleMusicClick = (item) => {
        setMusic(item); 
    }
    console.log(music.audio); 
    return (
        <>
            <Background backgroundUrl = {music.imageUrl} /> 
            <div className = "flex min-h-screen items-center gap-10 w-full ">
                <div className = " wrapper__album flex-1">           
                    <Album music = {music} /> 
                </div>
                <div className = "wrapper__menu flex-2">
                    <audio 
                        key = {music.id}
                        src = {music.audio} className="core__audio__player visible w-2 h-2" controls>
                    </audio> 
                    <Menu playLists = {playLists} handleMusicClick={handleMusicClick} /> 
                </div>
            </div>
        </>
    )
}
export default Music
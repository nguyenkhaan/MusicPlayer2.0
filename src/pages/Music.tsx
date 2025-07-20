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
    {
        id: 7, 
        duration: 88, 
        musicName: 'Advanced Challenge - PK06', 
        imageUrl: 'https://pbs.twimg.com/media/E_WR-dBWQAAIijt.jpg', 
        audio: '/audio/audio_test_7.mp3'
    },
    {
        id: 8, 
        duration: 244, 
        musicName: 'The Rivals - PK02', 
        imageUrl: 'https://i.pinimg.com/736x/c9/47/62/c947620557052453c710cb1815f26f8a.jpg', 
        audio: '/audio/audio_test_8.mp3'
    }, 
    {
        id: 9, 
        duration: 90, 
        musicName: 'Giấc mơ thần tiên', 
        imageUrl: 'https://cdn2.tuoitre.vn/zoom/700_525/471584752817336320/2025/3/19/doraemon-3-17423871378601670583097-20-0-598-1104-crop-174238741186164470166.jpg', 
        audio: '/audio/audio_test_9.mp3'
    }
    
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
                    <Menu music = {music} playLists = {playLists} handleMusicClick={handleMusicClick} /> 
                </div>
            </div>
        </>
    )
}
export default Music
//music chinh la bai hat dang hat. Truyen bai hat hien dang chon vao trong file Menu luon. Moi phan tu cua PlayList Item cung duoc nhan 1 ki tu ID 


/*
Bài học thu được
- Khoảng cách tương đối, tuyệt dối bằng getBoudingClinetRef() 
- Sử dụng phối hợp useEffect() [xủ lí những cài gì tồn đọng sau], useState (cập nhật 1 trạng thái và giao diện) 
- Bản chất của việc re-render lại giao diện không phải là viết mới hoàn toàn mà chỉ cập nhật cái gì cần thiết 
- Sử dụng thư viện React Flicking để tạo slider (không được phép chơi trò chỉ có 3 ô mà thay nội dung vì 
khi re-render sẽ thấy lỗi liền) 
- Sử dụng useRef() để tham chiếu chính xác tới 1 phần tử khi nó được gắn vào DOM 
- Khi viết chia file thì nên tập trung cái gì nhiều ở các component / fileCha rồi sau đó truyền dần xuống các file con. 
Hạn chế việc rời rạc giữa các file con dẫn tới khó xử lí 
- Có thể truyền cả hàm useState, useEffect... vào trong callback , event, ufunction... để xử lí 
- Tạo hiệu ưng drag bằng cách sử dụng mousemove, mousedown + khoảng cách tương đối (getBoundingClientRect()); 

*/ 
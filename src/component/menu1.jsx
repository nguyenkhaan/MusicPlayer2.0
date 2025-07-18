import React, { useEffect, useState } from 'react'
import PlaylistItem from './playlistItem'

function Header() {
    return (
        <div className="w-full menu__header text-white text-xl h-10 flex gap-12 justify-end items-center px-4">
            <i className="fa-solid fa-globe"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bars"></i>
        </div>
    )
}

function Menu({ playLists, handleMusicClick }) {
    const [startIndex, setStartIndex] = useState(0)
    const [currPlayList, setCurrPlayList] = useState([])
    const [fadeClass, setFadeClass] = useState('fade-in')

    const updatePlayList = (start) => {
        const len = playLists.length
        const get = (i) => playLists[(i + len) % len]
        setCurrPlayList([
            get(start),
            get(start + 1),
            get(start + 2)
        ])
    }

    useEffect(() => {
        updatePlayList(startIndex)
    }, [startIndex])    //Duoc update khi startIndex bi thay doi 
    const handleSwitch = (dir) => {
        if (fadeClass == 'fade-out') return 
        setFadeClass('fade-out') 
        setTimeout(() => {
            setStartIndex((prev) => {
                if (dir == 'next') return (prev + 1) % playLists.length; 
                return (prev - 1 + playLists.length) % playLists.length; 
            })
            setFadeClass('fade-in'); 
        }, 500)
        
    }
    return (
        <div className="menu__container px-4">
            <Header />
            <h1 className="mt-4 leading-[80px] text-6xl font-bold text-white w-2/3">
                Play Your <br /> Beloved Music
            </h1>
            <p className="mt-2 text-white text-base block w-2/3 mb-6">
                Select music from various genres, artists and composers. Play now, completely free and convenient.
            </p>

            <div className="menu__choose__music text-white text-lg w-full flex items-center justify-between mb-5">
                <span className="font-semibold block">Choose Musics</span>
                <div className="font-medium min-w-10 min-h-5 flex text-2xl pr-8 items-center justify-evenly gap-8">
                    <i className="fa-solid fa-left-long cursor-pointer" onClick={() => handleSwitch('prev')}></i>
                    <i className="fa-solid fa-right-long cursor-pointer" onClick={() => handleSwitch('next')}></i>
                </div>
            </div>

            <div className={`menu__playlist flex gap-4 w-full min-h-58 items-center justify-between overflow-hidden transition-opacity duration-500 ${fadeClass}`}>
                {currPlayList.map((item, index) => (
                    <PlaylistItem
                        key={index}
                        musicName={item.musicName}
                        imageUrl={item.imageUrl}
                        onClick={() => handleMusicClick(item)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu

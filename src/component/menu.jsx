import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistItem from './playlistItem'
function Header() 
{
    return (
        <div className = "w-full menu__header text-white text-xl h-10  flex gap-12 justify-end items-center px-4">
                <i className="fa-solid fa-globe"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-bars"></i>
        </div>
    )
}
function Menu({playLists , handleMusicClick})   //args: mang ten cac Playlist truyen vao 
{
    return (
        <div>
            <Header /> 
            <h1 className = "mt-4 leading-[80px] text-6xl font-bold text-white w-2/3">
                Play Your <br /> Beloved Music 
            </h1>
            <p className="mt-2 text-white text-base block w-2/3 mb-6">
                Select music from various genres, artists and composers. Play now, completely free and convinient. 
            </p>
            <span className = "font-semibold text-lg text-white mb-5 block">Choose Musics</span>
            <div className = "gap-4 menu__playlist w-full min-h-58 flex items-center justify-between">
                {playLists.map(item => {
                    return <PlaylistItem  musicName = {item.musicName} imageUrl = {item.imageUrl} onClick = {() => handleMusicClick(item)} /> 
                })}
            </div>
        </div>
    )
}
export default Menu
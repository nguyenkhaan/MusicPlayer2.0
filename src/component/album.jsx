import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import MusicButton from './musicButton'

function AlbumImage({imageUrl}) 
{
    return (
        <div className="album__image rounded-3xl w-full flex-8 bg-center bg-cover  bg-no-repeat"
            style = {{
                backgroundImage : `url(${imageUrl})`
            }}
        >

        </div>
    )
}
function AlbumMenu({musicName , author , children}) 
{
    return (
        <div className="album__menu block p-4 w-full flex-1 text-base text-white">
            <h2 className = "album__menu__music-name text-lg font-bold">{musicName}</h2>
            <span className = "album__meny__author my-1 block">{author}</span>
              {children}
        </div>
    )
}
function Album({music})
{
    console.log('>>>Check music', music); 
    return (
        <div className="album w-full rounded-3xl min-h-142 p-5 flex items-center justify-between flex-col bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
            <AlbumImage imageUrl = {music.imageUrl} /> 
            <AlbumMenu musicName= {music.musicName} author={'Kha An'} audio = {music.audio} >
                <MusicButton time = {music.duration || 0} change = {music.id} /> 
            </AlbumMenu>
        </div>
    )
}
export default Album
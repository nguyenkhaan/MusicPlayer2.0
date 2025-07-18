import React from 'react'
import ReactDOM from 'react-dom'
function PlaylistItem({musicName, imageUrl , onClick , slideAnimatingClass})
{
    return (
        <div 
            className = {`bg-white/10 backdrop-blur-md py-3 px-4 shadow-2xl border border-white/20 min-h-56 w-54 rounded-3xl cursor-pointer
                            ${slideAnimatingClass}
            `}
            onClick = {onClick}
            >
            <div 
                className = "bg-center w-full h-46 bg-cover bg-no-repeat rounded-4xl"
                style = {{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <span className="block text-center w-full text-white text-sm font-semibold">
                {musicName}
            </span>
        </div>
    )
}
export default PlaylistItem
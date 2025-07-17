import React from 'react'
import ReactDOM from 'react-dom'
function Background({backgroundUrl})
{
    return (
        <div className="fixed inset-0 bg-center bg-cover blur-md opacity-60 -z-10"
            style= {{
                backgroundImage: `url(${backgroundUrl})`
            }}
        > 
        </div>
    )
}
export default Background
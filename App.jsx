import React from 'react'
import ReactDOM from 'react-dom'
import Music from './src/pages/Music'
const playLists = [
    {
        musicName: 'Mot Doi', 
        imageUrl: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=', 
    }, 
    {
        musicName: 'Mot Doi', 
        imageUrl: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=', 
    }, 
    {
        musicName: 'Mot Doi', 
        imageUrl: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=' 
    }
]
function App()
{
    return (
        <>  
        <Music /> 
        </>
    )
}
export default App
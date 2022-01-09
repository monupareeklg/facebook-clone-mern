import { Avatar, Input } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const MessageSender = () => {
    const [input, setInput] = useState("")
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if(e.target.file[0]){
            setImage(e.target.files)
        }
    }

    const handleSubmit = (e) => {
        
        console.log("Submitting")
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src="https://avatars.githubusercontent.com/u/42226925?s=400&u=75aa67bd3931f04f5bc4997566109d88d60b362f&v=4" />
                <form>
                    <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Input type="file" className="messageSender__fileSelector" onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>HiddenSubmit</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color:'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

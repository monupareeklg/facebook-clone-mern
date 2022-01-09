import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post
             profilePic="https://avatars.githubusercontent.com/u/42226925?s=400&u=75aa67bd3931f04f5bc4997566109d88d60b362f&v=4"
             message="Test message"
             timestamp="1601493943737"
             imgName="imgName"
             username="Love"
             />
        </div>
    )
}

export default Feed

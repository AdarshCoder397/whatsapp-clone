import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({addNewChat}) {
  const [seed,setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  },[])

  const createChat = () => {
    const roomname = prompt("Enter a name for the chat")
    if (roomname){
      // database stuff
    }
  }
  
  return !addNewChat ? (
    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat_info">
        <h1>Room name</h1>
        <p>Last message..</p>
        </div>
    </div>
  ): (
    <div onClick={createChat}
    className="sidebarChat"> 
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";
function SidebarChat() {
  return <div>
    <div className='SidebarChat'>
        <Avatar />
        <div className='SidebarChat__info'>
            <h2>Room name</h2>
            <p>This is the last message</p>
        </div>
    </div>
  </div>;
  
}

export default SidebarChat;
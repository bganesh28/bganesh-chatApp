import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
  <div className="Sidebar">
    <div className='Sidebar__header'>
      <Avatar src='https://w0.peakpx.com/wallpaper/104/532/HD-wallpaper-dragon-ball-goku-dragon-ball-dragon-ball-gt-dragon-ball-legends-dragon-ball-super-dragon-ball-z-thumbnail.jpg' />
      <div className='Sidebar__headerRight'>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        
      
      </div>
         
    </div>
    <div className="Sidebar__search">
      <div className='Sidebar__searchContainer'>
        <SearchOutlinedIcon />
        <input placeholder='Search or start new chat' type="text" />
      </div>
    </div>
    <div className='sidebar__chats'>
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  </div>
  );
}

export default Sidebar;

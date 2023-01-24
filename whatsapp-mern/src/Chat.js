import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import React, {  useRef, useState } from 'react';
import axios from './axios';
import EmojiPicker from 'emoji-picker-react';
import './Chat.css';
function Chat({messages}) {
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  
  const handleEmojiPickerOpen = () => setEmojiPickerOpen(true);
  const handleEmojiPickerClose = () => setEmojiPickerOpen(false);

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji.emoji);
    setEmojiPickerOpen(false);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      "message": input,
      "name": "Bhavesh",
      "timestamp": "Now",
      "received": false,
    });
    setInput('');
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />

        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
             <MoreVert />
          </IconButton>
            </div>
      </div>
      <div className='chat__body' ref={chatBodyRef}>
        {messages.map((message) => (
          <p className={`chat__message ${!message.received && "chat__receiver"}`}>
          <span className='chat__name'>{message.name}</span>
          {message.message}
          <span className='chat__timestamp'>
            {message.timestamp}
          </span>
        </p>
        ))};
        

      </div>
      <div className='chat__footer'>
        <IconButton onClick={handleEmojiPickerOpen}>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} 
          placeholder='Type a message'
          type="text" />
          <button onClick={sendMessage} type='submit'>
            Send
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
        {emojiPickerOpen && (
          <div className="overlay" onClick={handleEmojiPickerClose}>
          <EmojiPicker onEmojiClick={handleEmojiClick}>
          </EmojiPicker>
          </div>
        )};
      </div>
    </div>
  );
}

export default Chat;
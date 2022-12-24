import React from 'react'
import './Chat.scss'
import moreIcon from "../../assets/icons/more.svg";
import callIcon from "../../assets/icons/call.svg";
import Messages from '../Messages/Messages';
import MessageInput from '../MessageInput/MessageInput';


type Props = {}

const Chat = (props: Props) => {
  return (
	<div className='chat'>
    <div className='chat__info'>
      <span>User</span>
      <div className='chat__buttons'>
        <button><img src={callIcon} alt="call" /></button>
        <button><img src={moreIcon} alt="more" /></button>
      </div>
    </div>
    <Messages/>
    <MessageInput/>
  </div>
  )
}

export default Chat
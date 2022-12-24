import React, { MutableRefObject, useRef } from "react";
import "./MessageInput.scss";

import attchEmojiIcon from "../../assets/icons/add-emoji.svg";
import attachFileIcon from "../../assets/icons/attach.svg";
import voiceMessageIcon from "../../assets/icons/voice-message.svg";
import sendMessageIcon from "../../assets/icons/send-message.svg";

type Props = {};

const MessageInput = (props: Props) => {
  let message = useRef<HTMLInputElement>(null);
  return (
    <div className="messageInput">
      <button className="messageInput__emoji">
        <img src={attchEmojiIcon} alt="" />
      </button>
      <input type="text" className="messageInput__type" ref={message} placeholder='Введите сообщение'/>
      <div className="messageInput__icons">
        <input type="file" id="attachFile" style={{display: 'none'}}/>
        <label className="messageInput__attachFile" htmlFor="attachFile">
          <img src={attachFileIcon} alt="attachFile"/>
        </label>
        {message.current?.value === null ? (
          <button className="messageInput__voiceMessage">
            <img src={voiceMessageIcon} alt="Voice message" />
          </button>
        ) : (
          <button className="messageInput__sendMessage">
            <img src={sendMessageIcon} alt="Send message" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageInput;

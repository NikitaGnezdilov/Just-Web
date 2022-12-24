import React from "react";
import "./Chats.scss";

type Props = {};

const Chats = (props: Props) => {
  return (
    <ul className="chats">
      <li className="chatItem">
        <div className="chatItem__avatar"></div>
        <div className="chatItem__body">
          <span className="chatItem__username">Username</span>
          <span className="chatItem__message">hello world!</span>
        </div>
      </li>
      <li className="chatItem">
        <div className="chatItem__avatar"></div>
        <div className="chatItem__body">
          <span className="chatItem__username">Username</span>
          <span className="chatItem__message">hello world!</span>
        </div>
      </li>
      <li className="chatItem">
        <div className="chatItem__avatar"></div>
        <div className="chatItem__body">
          <span className="chatItem__username">Username</span>
          <span className="chatItem__message">hello world!</span>
        </div>
      </li>
    </ul>
  );
};

export default Chats;

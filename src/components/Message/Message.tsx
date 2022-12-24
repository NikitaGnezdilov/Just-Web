import React from "react";
import "./Message.scss";

import placeholder from "../../assets/placeholder.jpg";

type Props = {};

const Message = (props: Props) => {
  return (
    <div className="message owner">
      <div className="message__user">
        <img src={placeholder} alt="user" />
        <span>12:45</span>
      </div>
      <div className="message__content">
        <img src={placeholder} alt="" />
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repellat cupiditate eaque cumque recusandae, soluta
          dolore voluptatibus culpa quos fugit deserunt eligendi tempore sit
          voluptas. Cum voluptatem soluta recusandae rem sapiente.
        </p>
      </div>
    </div>
  );
};

export default Message;

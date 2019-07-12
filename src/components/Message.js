import React from 'react';

const Message = ({msg, user}) => (
    <li className={`msg ${user === msg.username ? "right" : "left"}`}>
        {
            user !== msg.username
            && <img src={msg.img} alt={`${msg.username}`} />
        }
        {msg.content}
    </li>
);

export default Message;


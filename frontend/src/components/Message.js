import React from "react";
import { Link } from "react-router-dom";

import * as AiIcons from 'react-icons/ai';
import * as LuIcons from 'react-icons/lu';

function Message ({message}) {
    const messageClassName = 'message ' + (message.origin === "User" ? 'user-message' : 'computer-message');
    return (
        <div className={messageClassName}>
            <div className="message-icon">
                {message.origin === "User" ? <AiIcons.AiOutlineUser /> : <LuIcons.LuBot />}
            </div>
            <div className="message-content">
                <p>{message.content}</p>
                {message.origin === "Computer" && message.sources.length > 0 ? 
                <>
                </> : 
                <></>}
            </div>
        </div>
    );
};

export default Message;
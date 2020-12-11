import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import MessageX from "../MessageX/MessageX";
import "./Messages.css";

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><MessageX message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages;
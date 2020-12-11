import React from "react";
import "./MessageX.css";

const MessageX = ({ message: { user, text }, name }) => {
    let sentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        sentByCurrentUser = true;
    }

    return (
        sentByCurrentUser
            ? (
                //if sent by current user
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            )
            : (
                //if not from current user
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}

export default MessageX;
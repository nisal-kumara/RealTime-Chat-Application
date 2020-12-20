import React from "react";
import "./MessageX.css";

const MessageX = ({ message: { user, text }, name }) => {
    let sentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    //console.log(user, trimmedName);

    if (user === trimmedName) {
        sentByCurrentUser = true;
    }

    const splitName = user.split("_")[0];

    return (
        sentByCurrentUser
            ? (
                //if sent by current user
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">You*</p>
                    <div className="messageBox backgroundDark">
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
                    <p className="sentText pl-10">{splitName}</p>
                </div>
            )
    )
}

export default MessageX;
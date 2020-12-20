import React from "react";

import "./Input.css";
import blueArrow from "../../icon/blue-arrow.png";

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input type="text"
                className="input"
                placeholder="Type your message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null} />
            <button className="sendButton"
                onClick={(event) => sendMessage(event)}>
                <img src={blueArrow} alt="Send" /></button>
        </form>
    )
}

export default Input;
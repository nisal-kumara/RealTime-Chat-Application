import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import logoIcon from "../../icon/chat3.png";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const randomName = () => {

        const randomNum = Math.floor(Math.random() * 999999999999)
        return `${name}_${randomNum}`;
    }

    return (
        <div className="joinOuterContainer">
            <header></header>
            <form className="joinInnerContainer">
                <img src={logoIcon} alt="logo" />
                <h1 className="heading">Instant Chat</h1>
                <div><input
                    placeholder="User name"
                    className="joinInput"
                    type="text"
                    onChange={(event) => { setName(event.target.value) }} /></div>
                <h6>*This will be your name for the chat </h6>
                <div><input
                    placeholder="Room name"
                    className="joinInput mt-20"
                    type="text"
                    onChange={(event) => { setRoom(event.target.value) }} /></div>
                <h6>*Type a name to Join/Create a room </h6>

                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${randomName()}&room=${room}`}>
                    <button className="btnJoin mt-20" type="submit">Join</button>
                </Link>
            </form>
        </div>
    )
}


export default Join;
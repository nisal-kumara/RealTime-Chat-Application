import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({ location }) => {
    //watch from 40:50
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        //socket.io documentation
        socket.emit("join", { name, room }, () => {

        });

        return () => {
            socket.emit("disconect");
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    //another useEffect for message handling
    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    //function for sending message
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}


export default Chat;
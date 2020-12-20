import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import LiveUsers from "../LiveUsers/LiveUsers";

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState("");
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        let { name, room } = queryString.parse(location.search);
        //console.log(queryString.parse(location.search));

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        //socket.io documentation
        socket.emit("join", { name, room }, (error) => {
            if (error) {
                //console.log("name already taken");
                //fixed the username issue
            }
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
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages, users]);


    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }
    //console.log(message, messages);

    return (
        <div className="outerContainer">
            <LiveUsers users={users} name={name} />
            <div className="container">
                <InfoBar room={room} users={users} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}


export default Chat;
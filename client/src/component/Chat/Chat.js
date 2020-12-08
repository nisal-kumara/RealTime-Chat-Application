import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
    //watch from 40:50
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //socket.io documentation
        socket.emit("join", { name: name, room: room });

        return () => {
            socket.emit("disconect");
            socket.off();
        }
    }, [ENDPOINT, location.search]);


    return (
        <h3>Chat</h3>
    )
}


export default Chat;
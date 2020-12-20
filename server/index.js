const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const { addUser, removeUser, getUser, getUserInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
//socket.io documentation
const io = socketio(server, { cors: { origin: '*', method: ["GET", "POST"], credentials: true } });

app.use(router);
app.use(cors());

//socket.io documentation
io.on("connection", (socket) => {
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        const splitName = user.name.split("_")[0];

        if (error) return callback(error);

        socket.emit("message", { user: "system", text: `${splitName}, welcome to the room ${user.room}` });
        //broadcast will send a message to everyone except specific user
        socket.broadcast.to(user.room).emit("message", { user: "system", text: `${splitName}, has joined` });
        //this "join" method is specific to Socket.io 
        socket.join(user.room);
        io.to(user.room).emit("roomData", { room: user.room, users: getUserInRoom(user.room) });

        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", { user: user.name, text: message });
        //io.to(user.room).emit("roomData", { room: user.room, users: getUserInRoom(user.room) });
        callback();
    });

    socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        const splitName = user.name.split("_")[0];

        if (user) {
            io.to(user.room).emit("message", { user: "system", text: `${splitName} has left.` });
            io.to(user.room).emit("roomData", { room: user.room, users: getUserInRoom(user.room) });
        }
    });
    // socket.on("live", (message, callback) => {
    //     const user = getUser(socket.id);
    // });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
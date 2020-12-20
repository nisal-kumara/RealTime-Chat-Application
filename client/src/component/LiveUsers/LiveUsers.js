import React from "react";
//import io from "socket.io-client";

import Profile from "../Profile/Profile";
import onlineIcon from "../../icon/onlineIcon.png";
import "./LiveUsers.css";

// let socket;

const LiveUsers = ({ users, name }) => {
    //const ENDPOINT = 'localhost:5000';
    //let splitName = users.split("_")[0];

    return (
        <div className="live-container">
            <Profile users={users} name={name} />
            {users ?
                (<div className="liveInnerContainer">

                    <h3>Active Users in the room:</h3>
                    <div className="activeContainer">
                        {users.map(({ name }) => (
                            <div key={name} className="activeItem">
                                <img alt="Online Icon" src={onlineIcon} />
                                <h4>{name.split("_")[0]}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                )
                : null
            }
        </div>
    )
}


export default LiveUsers;
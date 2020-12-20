import React from "react";

import roomIcon from "../../icon/comments.png";
import closeIcon from "../../icon/remove.png";
import "./InfoBar.css";

const InfoBar = ({ room, users }) => {
    const userCount = users ? users.length : 0;

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="roomIcon" src={roomIcon} alt="Room icon" />
                <div className="roomDetail">
                    <h3>{room}</h3>
                    <h5>{`Users: ${userCount}`}</h5>
                </div>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;
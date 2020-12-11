import React from "react";

import onlineIcon from "../../icon/onlineIcon.png";
import closeIcon from "../../icon/closeIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;
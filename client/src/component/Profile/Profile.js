import React from "react";

import "./Profile.css";
import avatarIcon from "../../icon/profile.png";

const Profile = ({ users, name }) => {

    const splitName = name.split("_")[0];
    //const avatarLetter = splitName.split("")[0];

    return (
        <div className="profileContainer">
            <div className="profileAvatar">
                {/* <h2>{avatarLetter}</h2> */}
                <img src={avatarIcon} alt="Avatar" />
            </div>
            <h3>{splitName}</h3>
        </div>
    )
}

export default Profile;
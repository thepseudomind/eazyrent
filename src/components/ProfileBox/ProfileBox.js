import React from 'react';
import './ProfileBox.css';

const ProfileBox = ()=>{
    return (
        <div className="profile-box__user">
            <h1 className="profile-box__user--name">Batholomew Arinzeabalaga</h1>
            <p className="profile-box__user--location">Lagos, Nigeria</p>
        </div>
    );
}

export default ProfileBox;
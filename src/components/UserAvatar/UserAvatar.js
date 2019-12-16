import React from 'react';
import './UserAvatar.css';
import user from '../../img/myAvatar.png';

const UserAvatar = ()=>{
    return (
        <div className="user-avatar">
            <img src={user} alt="user" className="user-avatar__img"/>
            <button className="user-avatar__edit" onClick={()=>{alert('I want to change the profile pic')}}></button>
        </div>
    );
}

export default UserAvatar;

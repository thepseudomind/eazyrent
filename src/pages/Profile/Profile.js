import React from 'react';
import './Profile.css';
import BackButton from '../../components/BackButton/BackButton';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

const Profile = ()=>{
    return (
        <div>
            <BackButton text={'Back to listing'}/>
            <div className="app__main--content">
                <div className="app__main--details">
                    <div className="profile-box">
                        <UserAvatar/>
                        <ProfileBox/>
                    </div>
                </div>
                <div className="app__main--details">
                    <ProfileForm/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
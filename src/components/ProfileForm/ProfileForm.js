import React from 'react';
import './ProfileForm.css';

const ProfileForm = ()=>{
    return (
        <form className="profile-form">
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="input" placeholder="Joe" className="profile-form__form--input" id="name"/>
                    <label htmlFor="name" className="profile-form__form--label">name</label>
                </div>
                <div className="profile-form__form">
                    <input type="input" placeholder="Doe" className="profile-form__form--input" id="fullname"/>
                    <label htmlFor="fullname" className="profile-form__form--label">full name</label>
                </div>
            </div>
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="email" placeholder="john@doe@xyz.com" className="profile-form__form--input" id="email"/>
                    <label htmlFor="email" className="profile-form__form--label">Email address</label>
                </div>
                <div className="profile-form__form">
                    <input type="phone" placeholder="+2349080000000" className="profile-form__form--input" id="phone"/>
                    <label htmlFor="phone" className="profile-form__form--label">Phone Number</label>
                </div>
            </div>
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="input" placeholder="e.g. Lagos, Nigeria" className="profile-form__form--input" id="location"/>
                    <label htmlFor="location" className="profile-form__form--label">Location</label>
                </div>
                <div className="profile-form__form">
                    <input type="text" placeholder="100253" className="profile-form__form--input" id="postalcode"/>
                    <label htmlFor="postalcode" className="profile-form__form--label">Postal code</label>
                </div>
            </div>
            <a href='/' className="profile-form__btn">Save changes</a>
        </form>
    );
}

export default ProfileForm;
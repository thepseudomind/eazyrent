import React from 'react';
import './DetailBox.css';

const DetailBox = ()=>{
    return (
        <div className="detail-box">
            <h1 className="detail-box__title">2 bedroom flat</h1>
            <p className="detail-box__summary">Summary</p>
            <div className="detail-box__details">
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Rent type</p>
                    <p className="detail-box__info--subtitle">Monthly</p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Bedrooms</p>
                    <p className="detail-box__info--subtitle">2</p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Bathrooms</p>
                    <p className="detail-box__info--subtitle">1</p>
                </div>
            </div>
            <div className="detail-box__details">
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Kitchens</p>
                    <p className="detail-box__info--subtitle">1</p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Area</p>
                    <p className="detail-box__info--subtitle">1125ft<sup><small>2</small></sup></p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Road</p>
                    <p className="detail-box__info--subtitle">Good</p>
                </div>
            </div>
            <div className="detail-box__details">
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Security</p>
                    <p className="detail-box__info--subtitle">Private</p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Furnished</p>
                    <p className="detail-box__info--subtitle">No</p>
                </div>
                <div className="detail-box__info">
                    <p className="detail-box__info--title">Electricity</p>
                    <p className="detail-box__info--subtitle">Moderate</p>
                </div>
            </div>
            <div className="detail-box__buttons">
                <span>Fav</span>
                <span>Share</span>
                <a href="/" className="detail-box__btn">Book now</a>
            </div>
        </div>
    );
}

export default DetailBox;
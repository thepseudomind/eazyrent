import React from 'react';
import './DetailBox.css';

const DetailBox = ()=>{
    return (
        <div className="detail-box">
            <h1 className="detail-box__title">2 bedroom flat</h1>
            <p className="detail-box__address">Address: 2 Ajanaku Street, thanos, okokomaiko, her</p>
            <p className="detail-box__type">Rent type: Monthly</p>
            <p className="detail-box__type">Bedrooms: 2</p>
            <p className="detail-box__type">Bathrooms: 2</p>
            <p className="detail-box__price">₦25000</p>
            <a href="/" className="detail-box__btn">Book now</a>
        </div>
    );
}

export default DetailBox;
import React from 'react';
import './ListingCard.css';
import test from '../../img/home-1.jpg';
import bed from '../../img/bed.png';
import bath from '../../img/bathtub.png';
import road from '../../img/road.png';
import electricity from '../../img/electricity.png';

const ListingCard = (listing)=>{
    return (
        <div className="listing-card">
            <div className="listing-card__img-box"><img src={test} alt={listing.name} className="listing-card__img"/></div>
            <div className="listing-card__text">
                <h3 className="listing-card__text--name">{listing.name}</h3>
                <p className="listing-card__text--address">{listing.address}</p>
                <div className="listing-card__text--details">
<<<<<<< HEAD
                    <span className="listing-card__icons">2<img src={bed} alt="bedrooms" className="listing-card__icon"/></span>
                    <span className="listing-card__icons">2<img src={bath} alt="bathrooms" className="listing-card__icon"/></span>
                    <span className="listing-card__icons">Good<img src={road} alt="roads" className="listing-card__icon"/></span>
                    <span className="listing-card__icons">Great<img src={electricity} alt="lectricity" className="listing-card__icon"/></span>
=======
                    <span className="listing-card__icons">2<img src={bed} className="listing-card__icon"/></span>
                    <span className="listing-card__icons">2<img src={bath} className="listing-card__icon"/></span>
                    <span className="listing-card__icons">Good<img src={road} className="listing-card__icon"/></span>
                    <span className="listing-card__icons">Great<img src={electricity} className="listing-card__icon"/></span>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
                    {/* <span>baths</span>
                    <span>roads</span>
                    <span>electricity</span> */}
                </div>
            </div>
            <div className="listing-card__details">
                <h3 className="listing-card__details--price">₦{listing.price}</h3>
                <p className="listing-card__details--type">{listing.type}</p>
                <a href="/" className="listing-card__btn">View</a>
            </div>
        </div>
    );
}

export default ListingCard;
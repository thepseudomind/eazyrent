import React from 'react';
import './Listings.css';
import ListingCard from '../ListingCard/ListingCard';

const Listings = ({listings}) =>{
    return (
        <div className="app__main--content">
            <div className="listings">
                {
                    listings.map((v, i)=> <ListingCard key={i} name={listings[i].name} address={listings[i].address} price={listings[i].price} type={listings[i].type}/>)
                }
            </div>
        </div>
    );
}

export default Listings;
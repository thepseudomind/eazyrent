import React from 'react';
import './Listings.css';
import ListingCard from '../ListingCard/ListingCard';
import FloatingButton from '../FloatingButton/FloatingButton';

const Listings = ({listings, showFAB, postTest}) =>{
    return (
        <div className="app__main--content">
            <div className="listings">
                {
                    listings.map((v, i)=> <ListingCard key={i} name={listings[i].name} address={listings[i].address} price={listings[i].price} type={listings[i].type} image={listings[i].imageUrl}/>)
                }
            </div>
            {showFAB === 'userListings' ? <FloatingButton postTest={postTest}/> : <span></span>}
        </div>
    );
}

export default Listings;
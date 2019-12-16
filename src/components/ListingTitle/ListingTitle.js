import React from 'react';
import './ListingTitle.css';
import Toggler from '../Toggler/Toggler';

const ListingTitle = ()=>{
    return (
        <div className="app__main--content">
            <div className="app__main--listing">
                <h2 className="app__main--listing--title">Listing</h2>
                <Toggler/>
            </div>
        </div>
    );
}

export default ListingTitle;
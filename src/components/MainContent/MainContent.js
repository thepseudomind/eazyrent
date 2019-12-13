import React from 'react';
// import {Link} from 'react-router-dom';
import ListingPage from '../../pages/ListingPage/ListingPage';
import ViewListing from '../../pages/ViewListing/ViewListing';

const MainContent = ({listings})=>{
    return (
        <section className="app__main">
            {/* <ListingPage listings = {listings}/> */}
            <ViewListing/>
        </section>
    );
}

export default MainContent;
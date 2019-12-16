import React from 'react';
// import {Link} from 'react-router-dom';
import ListingPage from '../../pages/ListingPage/ListingPage';
import ViewListing from '../../pages/ViewListing/ViewListing';
import '../../pages/Profile/Profile';
import Profile from '../../pages/Profile/Profile';
import PaymentPage from '../../pages/PaymentPage/PaymentPage';

const MainContent = ({listings, currentRoute})=>{
    return (
        <section className="app__main">
            {/* <ListingPage listings = {listings}/> */}
            {/* <ViewListing/> */}
            {/* <Profile/> */}
            <PaymentPage/>
        </section>
    );
}

export default MainContent;
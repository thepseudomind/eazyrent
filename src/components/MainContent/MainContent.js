import React from 'react';
// import {Link} from 'react-router-dom';
import ListingPage from '../../pages/ListingPage/ListingPage';
import ViewListing from '../../pages/ViewListing/ViewListing';
import '../../pages/Profile/Profile';
import Profile from '../../pages/Profile/Profile';
import PaymentPage from '../../pages/PaymentPage/PaymentPage';
import AddListing from '../../pages/AddListing/AddListing';

const MainContent = ({listings})=>{
    return (
        <section className="app__main">
            {/* <ListingPage listings = {listings}/> */}
            <AddListing />
            {/* <ViewListing/> */}
            {/* <Profile/> */}
            {/* <PaymentPage/> */}
        </section>
    );
}

export default MainContent;
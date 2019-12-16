import React from 'react';
// import {Link} from 'react-router-dom';
import ListingPage from '../../pages/ListingPage/ListingPage';
import ViewListing from '../../pages/ViewListing/ViewListing';
<<<<<<< HEAD
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
=======

const MainContent = ({listings})=>{
    return (
        <section className="app__main">
            {/* <ListingPage listings = {listings}/> */}
            <ViewListing/>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
        </section>
    );
}

export default MainContent;
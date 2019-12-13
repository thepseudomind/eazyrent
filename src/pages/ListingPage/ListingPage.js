import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Listings from '../../components/Listings/Listings';
import ListingTitle from '../../components/ListingTitle/ListingTitle';
// import { changePageRoute } from '../../actions/actions';

const ListingPage = ({listings})=>{
    return (
        <div>
            <SearchBar/>
            <ListingTitle/>
            <Listings listings={listings}/>
        </div>
    );
}

export default ListingPage;
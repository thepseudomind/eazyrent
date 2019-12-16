import React from 'react';
import searchicon from '../../img/searchicon.png';
import './Searchbar.css';

const SearchBar = ()=>{
    return (
        <div className="app__main--content">
            <form className="app__main--searchbar" autoComplete="off">
                <input type="search" className="app__main--searchbar--input" placeholder="Search for your dream home" id="search"/>
                <img src={searchicon} alt="searchIcon" className="app__main--searchbar--icon"/>
            </form>
        </div>
    );
}

export default SearchBar;
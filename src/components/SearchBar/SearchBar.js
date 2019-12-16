import React from 'react';
import searchicon from '../../img/searchicon.png';
import './Searchbar.css';

const SearchBar = ()=>{
    return (
        <div className="app__main--content">
            <form className="app__main--searchbar" autoComplete="off">
                <input type="search" className="app__main--searchbar--input" placeholder="Search for your dream home" id="search"/>
<<<<<<< HEAD
                <img src={searchicon} alt="searchIcon" className="app__main--searchbar--icon"/>
=======
                <img src={searchicon} className="app__main--searchbar--icon"/>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
            </form>
        </div>
    );
}

export default SearchBar;
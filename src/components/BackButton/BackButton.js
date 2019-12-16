import React from 'react';
import './BackButton.css';

<<<<<<< HEAD
const BackButton = ({text})=>{
    return (
        <div className="app__main--content">
            {
                (text) ? <a href='/' className="app__main--back"><span className="app__main--back-button">&larr;</span>{text}</a> :
                <a href='/' className="app__main--back--notext"><span className="app__main--back-button">&larr;</span>{text}</a>
            }
=======
const BackButton = ()=>{
    return (
        <div className="app__main--content">
            <a href='/' className="app__main--back"><span className="app__main--back-button">&larr;</span>Back to listing</a>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
        </div>
    );
}

export default BackButton;
import React from 'react';
import './BackButton.css';

const BackButton = ({text})=>{
    return (
        <div className="app__main--content">
            {
                (text) ? <a href='/' className="app__main--back"><span className="app__main--back-button">&larr;</span>{text}</a> :
                <a href='/' className="app__main--back--notext"><span className="app__main--back-button">&larr;</span>{text}</a>
            }
        </div>
    );
}

export default BackButton;
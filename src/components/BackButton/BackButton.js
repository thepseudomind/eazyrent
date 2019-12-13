import React from 'react';
import './BackButton.css';

const BackButton = ()=>{
    return (
        <div className="app__main--content">
            <a href='/' className="app__main--back"><span className="app__main--back-button">&larr;</span>Back to listing</a>
        </div>
    );
}

export default BackButton;
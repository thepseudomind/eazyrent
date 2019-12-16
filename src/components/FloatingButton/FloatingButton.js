import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({action, reset})=>{
    return (
        <a href="#" className="floating-button" onClick={()=>{
            reset();
            action('add');
        }}></a>
    );
}

export default FloatingButton;
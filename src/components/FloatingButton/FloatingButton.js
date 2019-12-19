import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({action, reset, postTest})=>{
    return (
        <a href="#" className="floating-button" onClick={()=>{
            if(reset && action){
                reset();
                action('add');
            }else if(postTest){
                postTest();
            }
        }}><span className="floating-button__icon">+</span></a>
    );
}

export default FloatingButton;
import React from 'react';
import './AlertBox.css';

const AlertBox = ({message})=>{
    switch (message) {
        case 'Bank already added':
            return (
                <div className="alert-box">
                    <p className="alert-box__message">Bank already added</p>
                </div>
            );
        
        case 'Maximum of 3 banks allowed':
                return (
                    <div className="alert-box">
                        <p className="alert-box__message">Maximum of 3 banks allowed</p>
                    </div>
                );

        case 'Bank details changed':
                return (
                    <div className="alert-box">
                        <p className="alert-box__message">Bank details changed</p>
                    </div>
                );
    
        default:
            return <span></span>;
    }
}

export default AlertBox;
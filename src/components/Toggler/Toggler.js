import React from 'react';
import './Toggler.css';

const Toggler = ()=>{
    return (
        <span className="toggler">
            <input type="radio" name="activity" id="active" value="active" className="toggler__input" defaultChecked />
            <label htmlFor="active"  className="toggler__label">Active</label>
            <input type="radio" name="activity" id="inactive" value="inactive" className="toggler__input" />
            <label htmlFor="inactive" className="toggler__label">Inactive</label>
        </span>
    );
}

export default Toggler;
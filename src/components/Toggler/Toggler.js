import React from 'react';
import './Toggler.css';

const Toggler = ({toggle})=>{
    return (
        <span className="toggler">
            <input type="radio" name="activity" id="active" value="userListings" className="toggler__input" defaultChecked onChange={(e)=>toggle(e.target.value)}/>
            <label htmlFor="active"  className="toggler__label">My Homes</label>
            <input type="radio" name="activity" id="inactive" value="otherListings" className="toggler__input" onChange={(e)=>{toggle(e.target.value)}}/>
            <label htmlFor="inactive" className="toggler__label">Other Homes</label>
        </span>
    );
}

export default Toggler;
import React from 'react';
import './AddListing.css';
import BackButton from '../../components/BackButton/BackButton';
import ImagePicker from '../../containers/ImagePicker/ImagePicker';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ListingForm from '../../components/ListingForm/ListingForm';

const AddListing = ()=>{
    return (
        <div>
            <BackButton text={'Back to listings'}/>
            <div className="app__main--content">
                <div className="app__main--details">
                    <ListingForm/>
                    <ImagePicker/>
                </div>
                {/* <div className="app__main--details">
                    <ProfileForm/>
                </div> */}
            </div>
        </div>
    );
}

export default AddListing;
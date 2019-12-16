import React from 'react';
import '../../components/BackButton/BackButton';
import BackButton from '../../components/BackButton/BackButton';
import ImageGallery from '../../containers/ImageGallery/ImageGallery';
import DetailBox from '../../components/DetailBox/DetailBox';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import Map from '../../components/Map/Map';

const ViewListing = ()=>{
    return (
        <div>
            <BackButton text={'Back to listing'}/>
            <div className="app__main--content">
                <div className="app__main--details">
                    <ImageGallery/>
                    <DetailBox/>
                </div>
                <div className="app__main--details">
                    <DescriptionBox/>
                    <Map/>
                </div>
            </div>
        </div>
    );
}

export default ViewListing;
<<<<<<< HEAD
import React from 'react';
import '../../components/BackButton/BackButton';
import BackButton from '../../components/BackButton/BackButton';
import ImageGallery from '../../containers/ImageGallery/ImageGallery';
import DetailBox from '../../components/DetailBox/DetailBox';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import Map from '../../components/Map/Map';
=======
import React, {Suspense} from 'react';
import '../../components/BackButton/BackButton';
import BackButton from '../../components/BackButton/BackButton';

const ImageGallery = React.lazy(()=> import('../../containers/ImageGallery/ImageGallery'));
const DetailBox = React.lazy(()=> import('../../components/DetailBox/DetailBox'));
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7

const ViewListing = ()=>{
    return (
        <div>
<<<<<<< HEAD
            <BackButton text={'Back to listing'}/>
            <div className="app__main--content">
                <div className="app__main--details">
                    <ImageGallery/>
                    <DetailBox/>
                </div>
                <div className="app__main--details">
                    <DescriptionBox/>
                    <Map/>
=======
            <BackButton/>
            <div className="app__main--content">
                <div className="app__main--details">
                    <Suspense fallback="<p>Loading</p>">
                        <ImageGallery/>
                    </Suspense>
                    <Suspense fallback="<p>Loading</p>">
                        <DetailBox/>
                    </Suspense>
                </div>
                <div className="app__main--details">
                    <h1>FURTHER DESCRIPTION GOES HERE</h1>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
                </div>
            </div>
        </div>
    );
}

export default ViewListing;
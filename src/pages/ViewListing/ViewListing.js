import React, {Suspense} from 'react';
import '../../components/BackButton/BackButton';
import BackButton from '../../components/BackButton/BackButton';

const ImageGallery = React.lazy(()=> import('../../containers/ImageGallery/ImageGallery'));
const DetailBox = React.lazy(()=> import('../../components/DetailBox/DetailBox'));

const ViewListing = ()=>{
    return (
        <div>
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
                </div>
            </div>
        </div>
    );
}

export default ViewListing;
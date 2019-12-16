import React, { Component } from 'react';
import './ImageGallery.css';
import home1 from '../../img/home-1.jpg';
import home2 from '../../img/home-2.jpg';
import home3 from '../../img/home-3.jpg';
import home4 from '../../img/home-4.jpg';
import home5 from '../../img/home-5.jpg';
import home6 from '../../img/home-6.jpg';
import home7 from '../../img/home-7.jpg';
import home8 from '../../img/home-8.jpg';

const images = [home1, home2, home3, home4, home5, home6, home7, home8];
class ImageGallery extends Component{
    constructor(){
        super();
        this.state = {
            images : images,
            activeImage: images[0]
        }
    }

    changeActiveImage (image){
        this.setState({activeImage: image});
    }

    render(){
        return (
            <div className="image-gallery">
<<<<<<< HEAD
                <img alt="mainImage" className="image-gallery__active" src={this.state.activeImage}/>
=======
                <img className="image-gallery__active" src={this.state.activeImage}/>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
                <div className="image-gallery__inactive">
                    {this.state.images.map(
                        (v, i) => {
                            if(images[i] === this.state.activeImage){
<<<<<<< HEAD
                                return <img key={images[i]} alt="activeImage" className="image-gallery__inactive--images image-gallery__inactive--images--active" src={images[i]} onClick={()=> this.changeActiveImage(images[i])}/>
                            }else{
                                return <img key={images[i]} alt="inactiveImage" className="image-gallery__inactive--images" src={images[i]} onClick={()=> this.changeActiveImage(images[i])}/>
=======
                                return <img key={images[i]} className="image-gallery__inactive--images image-gallery__inactive--images--active" src={images[i]} onClick={()=> this.changeActiveImage(images[i])}/>
                            }else{
                                return <img key={images[i]} className="image-gallery__inactive--images" src={images[i]} onClick={()=> this.changeActiveImage(images[i])}/>
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
                            }
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default ImageGallery;
import React, { Component } from 'react';
import './ImagePicker.css';

class ImagePicker extends Component{
    constructor(){
        super();
        this.state = {
            images: []
        }
    }

    recieveImages = (files) =>{
        this.setState({images: Array.from(files)})
    }

    renderImage = (image, i)=>{
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            document.getElementById(`preview-${i}`).style.backgroundImage = `url(${reader.result})`;
        });
        reader.readAsDataURL(image);
    }

    deleteImage = (e)=>{
        const id = parseInt(e.target.parentNode.id.slice(-1));
        this.state.images.splice(id, 1);
        this.setState({images: this.state.images});
    }

    render(){
        return (
            <div>
                <div className="image-picker" onClick={
                    ()=>{
                        const imagePicker = document.getElementById('images');
                        imagePicker.click();
                    }
                }>
                    <input type="file" id="images" className="image-picker__picker" accept="image/*" multiple onChange={
                        (e) => {
                            this.recieveImages(e.target.files);
                        }
                    }/>
                    <div className="image-picker__content">
                        <a href="#" className="image-picker__btn">
                            <span className="image-picker__btn--icon">+</span>
                        </a>
                        <p className="image-picker__label">Add images</p>
                    </div>
                </div>
                <div className="image-picker__preview">
                    {
                        this.state.images.map((v, i, a) => {
                            this.renderImage(a[i], i);
                            return (
                                <div key={`preview-${i}`} id={`preview-${i}`} className="image-picker__img">
                                    <span className="image-picker__del" onClick={this.deleteImage}>
                                        x
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ImagePicker;
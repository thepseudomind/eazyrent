import React from 'react';
import './ListingForm.css';

const ListingForm = ()=>{
    return (
        <div className="listing-form">
            <h1 className="listing-form__title">Add new home</h1>
            <form>
                <div className="listing-form__form">
                    <input type="text" className="listing-form__input" placeholder="2 bedroom flat" id="title"/>
                    <label className="listing-form__label" htmlFor="title">title</label>
                </div>
                <div className="listing-form__form">
                    <input type="text" className="listing-form__input" placeholder="56, Bolanle Avenue" id="address"/>
                    <label className="listing-form__label" htmlFor="address">address</label>
                </div>
                <div className="listing-form__row">
                    <div className="listing-form__col">
                        <input type="number" className="listing-form__price" placeholder="250000" id="price"/>
                        <label className="listing-form__label" htmlFor="price">price</label>
                    </div>
                    <div className="listing-form__col">
                        <select className="listing-form__type" placeholder="Choose one" id="payment">
                            <option value="none">Choose one</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                        <label className="listing-form__label" htmlFor="payment">payment type</label>
                    </div>
                </div>
                <div className="listing-form__row">
                    <div className="listing-form__col">
                        <select className="listing-form__type" placeholder="Bedrooms" id="state">
                            <option value="none">Choose one</option>
                            <option value="1">Lagos</option>
                            <option value="2">Abuja</option>
                            <option value="3">Ogun</option>
                            <option value="4">Port Harcourt</option>
                            <option value="5">Oyo</option>
                        </select>
                        <label className="listing-form__label" htmlFor="state">state</label>
                    </div>
                    <div className="listing-form__col">
                        <select className="listing-form__type" placeholder="Bedrooms" id="city">
                            <option value="none">Choose one</option>
                            <option value="1">Ikeja</option>
                            <option value="2">Victoria Island</option>
                            <option value="3">Yaba</option>
                        </select>
                        <label className="listing-form__label" htmlFor="city">city</label>
                    </div>
                </div>
                <div className="listing-form__row">
                    <div className="listing-form__col">
                        <select className="listing-form__type" placeholder="Bedrooms" id="beds">
                            <option value="none">Choose one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label className="listing-form__label" htmlFor="beds">no of bedrooms</label>
                    </div>
                    <div className="listing-form__col">
                        <select className="listing-form__type" placeholder="Bedrooms" id="baths">
                            <option value="none">Choose one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <label className="listing-form__label" htmlFor="baths">no of bathrooms</label>
                    </div>
                </div>
                <div className="listing-form__footer"><a href="#" className="listing-form__btn">Add new home</a></div>
            </form>
        </div>
    );
}

export default ListingForm;
import React from 'react';
import logo from '../../img/logo-test.png';
import home from '../../img/home.png';
import chart from '../../img/chart.png';
import man from '../../img/man.png';
import settings from '../../img/settings.png';
import payment from '../../img/payment.png';
import signout from '../../img/signout.png';
import './Sidebar.css';

const Sidebar = ({router})=>{
    return (
        <section className="app__sidebar">
            <div className="app__sidebar--logo-box">
                <img src={logo} className="app__sidebar--logo" />
            </div>
            <div className="app__sidebar--menu">
                <ul>
                    <li><a className="app__sidebar--menu--items" href="/" onClick = {()=> router('test')}><img src={home} className="app__sidebar--menu--icons"/>Home</a></li>
                    <li><a href="/" className="app__sidebar--menu--items"><img src={chart} className="app__sidebar--menu--icons"/>Listings</a></li>
                    <li><a href="/" className="app__sidebar--menu--items"><img src={man} className="app__sidebar--menu--icons"/>Profile</a></li>
                    <li><a href="/" className="app__sidebar--menu--items"><img src={settings} className="app__sidebar--menu--icons"/> Settings</a></li>
                    <li><a href="/" className="app__sidebar--menu--items"><img src={payment} className="app__sidebar--menu--icons"/> Payments</a></li>
                    <li><a href="/" className="app__sidebar--menu--items"><img src={signout} className="app__sidebar--menu--icons"/> Log out</a></li>
                </ul>
            </div>
            <div className="app__sidebar--banner"></div>
        </section>
    );
}

export default Sidebar;
import React, { Component } from 'react';
import './App.css';
import { homes } from '../../homes';
import Auth from '../../pages/Auth/Auth';
import Dashboard from '../../pages/Dashboard/Dashboard';

class App extends Component{
    constructor(){
        super();
        this.state = {
            'homes' : homes
        }
    }

    render(){
        return(
            // <Auth/>
            <Dashboard homes = {this.state.homes}/>
        );
    }
}

export default App;
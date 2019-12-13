import React, { Component } from 'react';
import { homes } from '../../homes';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';
import './App.css';

// const mapStateToProps = (state) => {
//     return {
//         route: state.route
//     };
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         changeRoute: (e)=> dispatch(changePageRoute(e.target.value))
//     }
// }

class App extends Component{
    constructor(){
        super();
        this.state = {
            'homes' : homes
        }
    }

    render(){
        return(
            <div className="app">
                <Sidebar/>
                <MainContent listings = {this.state.homes}/>
            </div>
        );
    }
}

export default App;
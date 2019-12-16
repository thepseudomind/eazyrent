import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
import { homes } from '../../homes';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';
import './App.css';
<<<<<<< HEAD
import { changePageRoute } from '../../actions/actions';
=======
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7

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
<<<<<<< HEAD
        // const {route, changeRoute} = this.props;
        // console.log(route);
=======
>>>>>>> b1b957c725a0de1dfa657c0b6f81e51305a992f7
        return(
            <div className="app">
                <Sidebar/>
                <MainContent listings = {this.state.homes}/>
            </div>
        );
    }
}

export default App;
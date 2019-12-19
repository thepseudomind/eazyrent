import React from 'react';
import './Dashboard.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/MainContent/MainContent';

const Dashboard = ({homes})=>{
    return (
        <div className="app">
            <Sidebar/>
            <MainContent listings = {homes}/>
        </div>
    );
}

export default Dashboard;
import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Listings from '../../components/Listings/Listings';
import ListingTitle from '../../components/ListingTitle/ListingTitle';
// import { changePageRoute } from '../../actions/actions';

class ListingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: 'abgfigu143668',
            toggleStatus: 'userListings',
            listings : [],
            userListings: [],
            otherListings: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/users').then(
            (res) => res.json()
        ).then(
            // data => console.log(data)
            
            users => {
                for( const user in users){
                    if(user === this.state.user){
                        this.setState({listings: users[user]["listings"], userListings: users[user]["listings"]});
                    }else{
                        this.setState({otherListings: users[user]["listings"]});
                    }
                }
            }
        );
    }

    postToServer = ()=>{
        const testPost =  {
            id: "8654",
            name: "7 bedroom flat",
            address: "3, gotham street, batman avenue, that fun town",
            price: "124000",
            type: "yearly",
            imageUrl: "http://localhost:3000/img/home-1.jpg"
        };
        fetch('http://localhost:3000/dummy.json', {
            method: 'POST',
            mode: 'same-origin',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(testPost)
        }).then(
            (res) => res.json() 
        ).then(
            data => console.log(data)
        )
    }

    listingToRender = (toggleStatus) => {
        if(toggleStatus === 'otherListings'){
            this.setState({toggleStatus: toggleStatus, listings: this.state.otherListings});
        }else{
            this.setState({toggleStatus : toggleStatus, listings: this.state.userListings});
        }
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <ListingTitle toggle={this.listingToRender}/>
                <Listings listings={this.state.listings} showFAB = {this.state.toggleStatus} postTest = {this.postToServer}/>
            </div>
        );
    }
}

export default ListingPage;
// MainComponent module for git Fetcher App

import React from 'react';
import {fetchUser, fetchRepo} from './api.js';
import UserDetails from './userDetails.js';


class MainComponent extends React.Component{

  state = {
    username: "",
    userInfo: {},
    repos: [],
    isError: false,
  }

   // Fetches User's Info and & Git Repos
   fetcher = async (e) => {
    e.preventDefault();
    const UserData = await fetchUser(this.state.username);
    
    if ( "login" in UserData){
      const repos = await fetchRepo(UserData.repos_url);
      this.setState(() => ({
        userInfo: UserData,
        repos: repos,
        isError: false,
      }));
    } 
    else{
        console.log("userData is",UserData);
        this.setState(() => ({
          userInfo: {},
          repos:[],
          isError: true,
        }));
      }
    }

    handleUsername = (e) => {
      const data =  e.target.value;
      this.setState(()=> ({
        username: data,
      }))
    }

  render(){
    return(
      <div className="container">
        <div className="search-user-box form-group">
          <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Enter Username" className="form-control"/>
          <button onClick={this.fetcher} className="submit-btn btn btn-info"> Submit </button>
        </div>
            <p > Get Details of Users from Github </p>
          {   (this.state.isError) ? <div className="error-state"> <h3> Kindly retype valid username </h3> </div>
           : ("login" in this.state.userInfo) && <UserDetails user={this.state.userInfo} repos={this.state.repos}/>
                  }
      </div>
      );
  }
}




export default MainComponent;
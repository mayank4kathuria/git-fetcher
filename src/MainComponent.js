// MainComponent for git Fetcher App

import React from 'react';
import {fetchUser, fetchRepo} from './api.js';
import UserDetails from './userDetails.js';


class MainComponent extends React.Component{

  state = {
    username: "mayank4kathuria",
    userInfo: {},
    repos: [],
    isError: false,
  }

   fetcher = async (e) => {
    e.preventDefault();
    const UserData = await fetchUser(this.state.username);
    
    if ( "login" in UserData){
      const repos = await fetchRepo(UserData.repos_url);
      this.setState(() => ({
        userInfo: UserData,
        repos: repos,
        isError: false,
      }), () => console.log("repo test",this.state.repos)); 
    } 
    else{
        console.log("userData is",UserData);
        this.setState(() => ({
          userInfo: {},
          repos:[],
          isError: true,
        }), () => (console.log("error was runned")));
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
        <div className="search-user-box">
          <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Enter Username"/>
          <button onClick={this.fetcher} > Submit </button>
        </div>
            <p> Get Details of Users from Github </p>
          {   (this.state.isError) ? <div className="error-state"> <h3> Kindly retype valid username </h3> </div>
           : ("login" in this.state.userInfo) && <UserDetails user={this.state.userInfo} repos={this.state.repos}/>
                  }
      </div>
      );
  }
}




export default MainComponent;

// A User Detail Pure stateless component

import React from 'react';
import RepoBox from './repoBox.js';


const UserDetails = (props) => (
  <div className="profile-container">
    <div className="profile-information">
      <img src={props.user.avatar_url} />
      <p>Name: {props.user.name || "NONE"} </p>
      <p>Bio: {props.user.bio || "NONE"} </p>
      <p> Location: {props.user.location || "NONE"} </p> 
      <p>Public Repos: {props.user.public_repos} </p>
      <p>Followers: {props.user.followers}</p>
      <p>Following: {props.user.following}</p>
    </div>
    <div className="profile-repo">
      <h3>Repositories</h3>
      <div className="repo-list">
        { props.repos.length !=0 ? 
          props.repos.map( (repo) => <RepoBox repo={repo}/> ) :
          <h3>-- NO REPOS FOUND --</h3>
        }
      </div>
    </div>
  </div>

)

export default UserDetails;
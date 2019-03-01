
// Repo Box Pure Stateless Component 

import React from 'react';

const RepoBox = (props) => (
      <div className="repo-box">
        <a href={props.repo.html_url} target="_blank" rel="noopener">
          <h4>{props.repo.name}</h4>
          <hr/>
        </a>
      </div>

);


export default RepoBox;

// An Individual Module for API calls

const URL = "https://api.github.com/users/";

// API call to fetch User details
export const fetchUser = (user) => (
    fetch(`${URL}${user}`)
    .then( res => res.json())
    .then( val => val)
    .catch( err => [])
)

// API call to fetch User Repo
export const fetchRepo = (repos) => (
  fetch(repos)
  .then(res => res.json())
  .then(val => val)
  .catch( err => [])
)
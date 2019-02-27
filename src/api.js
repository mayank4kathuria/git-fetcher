// A Seprate Module for API calls

const URL = "https://api.github.com/users/";


export const fetchUser = (user) => (
    fetch(`${URL}${user}`)
    .then( res => res.json())
    .then( val => val)
    .catch( err => console.log("err is",err))
)

export const fetchRepo = (repos) => (
  fetch(repos)
  .then(res => res.json())
  .then(val => val)
  .catch( err => console.log("err in repo is",err))
  )


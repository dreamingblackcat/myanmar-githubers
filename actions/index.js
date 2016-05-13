export const REQUEST_GITHUBERS = 'REQUEST_GITHUBERS';
export const GITHUBER_LIST     = 'GITHUBER_LIST';

export function fetchGithubers() {
  return dispatch => {
    return fetch(`https://api.github.com/users/dreamingblackcat/followers`)
      .then( response => response.json() )
      .then( json => { console.log(json); dispatch(receiveGithubers(json)); });
  }
}

function receiveGithubers(json) {
  return {
    type: GITHUBER_LIST,
    githubers: json
  }
}
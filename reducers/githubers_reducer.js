import { GITHUBER_LIST } from '../actions';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {
    case GITHUBER_LIST:
      return action.githubers;
    default:
      return state;
  }
}
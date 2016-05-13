const initialState = ['mm'];

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GITHUBER_LIST':
      return ['jj', 'kk'];
    default:
      return state;
  }
}
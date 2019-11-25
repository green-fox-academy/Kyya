import { CREATE_POST_SUCCESS, FETCH_POST_SUCCESS, SEND_VOTE_SUCCESS } from './actionCreator';

export function posts(state = [], action) {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return [ ...state, action.payload];
    case FETCH_POST_SUCCESS:
      return [...action.payload.posts];
    case SEND_VOTE_SUCCESS:
      return [
        ...state.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      ]
    default:
      return state;
  }
}

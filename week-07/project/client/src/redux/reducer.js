import { CREATE_POST, FETCH_POST_SUCCESS } from './actionCreator';

export function posts(state = [], action) {
  switch (action.type) {
    case CREATE_POST:
      return state;
    case FETCH_POST_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

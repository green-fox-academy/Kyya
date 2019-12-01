import {
  CREATE_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  SEND_VOTE_SUCCESS,
  REMOVE_POST_SUCCESS,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS
} from './actionCreator';

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
    case REMOVE_POST_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.payload)
      ]
    default:
      return state;
  }
}

const getUserFromLocalStorage = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem('user'));
    return parsed;
  } catch (error) {
    return null
  }
}

export function user(state = getUserFromLocalStorage(), action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return action.payload.user;
    case REGISTER_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}

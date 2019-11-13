import { FETCH_POST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actionCreator'

const defaultState = {
  isLoading: false,
  data: [],
  error: ''
}

export default function posts(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POST_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case FETCH_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

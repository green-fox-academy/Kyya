import {
  RECEIVE_MESSAGE,
  FETCH_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_LOCAL
} from './actionCreator';

const defaultState = {
  isLoading: false,
  data: [],
  error: ''
}

export default function messages(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        data: action.payload
      }
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case SEND_MESSAGE_LOCAL:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state;
  }
}

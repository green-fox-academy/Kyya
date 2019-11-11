import { ADD_TAG, REMOVE_TAG, REMOVE_ALL_TAGS } from './actionCreator';

const defaultState = [
  'blue',
  'bold',
  'hipster'
]
function tags(state = defaultState, action) {
  switch(action.type) {
    case ADD_TAG:
      return [...state, action.tag];
    case REMOVE_TAG:
      return [...state.filter(tag => tag !== action.tag)];
    case REMOVE_ALL_TAGS:
      return [];
    default:
      return state;
  }
}

export default tags;

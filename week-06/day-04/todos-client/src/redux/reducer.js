import { FETCH_TODO_SUCCESS, ADD_TODO_SUCCESS, REMOVE_TODO_SUCCESS, TOGGLE_TODO_SUCCESS } from './actionCreator';

export function todos(state = [], action) {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return [ ...state, ...action.payload.todos ];
    case ADD_TODO_SUCCESS:
      return [ ...state, action.payload ];
    case REMOVE_TODO_SUCCESS:
      return [ ...state.filter(todo => todo.id !== action.payload ) ];
    case TOGGLE_TODO_SUCCESS:
      return [ ...state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      }) ];
    default:
      return state;
  }
}

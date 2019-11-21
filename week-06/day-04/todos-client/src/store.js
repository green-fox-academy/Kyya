import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todos } from './redux/reducer';

const rootReducer = combineReducers({
  todos
})

export default createStore(rootReducer, applyMiddleware(thunk));

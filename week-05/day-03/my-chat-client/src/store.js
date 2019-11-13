import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import messages from './redux/reducer';

const rootReducer = combineReducers({
  messages
});

export default createStore(rootReducer, applyMiddleware(thunk));

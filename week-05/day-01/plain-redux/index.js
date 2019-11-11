const { createStore, combineReducers } = require('redux');

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const SET = 'SET';
const RESET = 'RESET';

const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const REMOVE_TAGS = 'REMOVE_TAGS';

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + (action.amount || 1);
    case DECREASE:
      return state - (action.amount || 1);
    case SET:
      return action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      return [...new Set([ ...state, action.tag ])];
    case REMOVE_TAG:
      return [ ...state.filter(tag => tag !== action.tag) ];
    case REMOVE_TAGS:
      return [];
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  counter,
  tags
}));

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({ type: SET, amount: 6 });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE, amount: 2 });
store.dispatch({ type: RESET });
store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE, amount: 4 });

store.dispatch({type: ADD_TAG, tag: 'blue'});
store.dispatch({type: ADD_TAG, tag: 'bold'});
store.dispatch({type: ADD_TAG, tag: 'hipster'});

store.dispatch({type: REMOVE_TAG, tag: 'blue'});
store.dispatch({type: ADD_TAG, tag: 'bold'});
store.dispatch({type: REMOVE_TAGS });

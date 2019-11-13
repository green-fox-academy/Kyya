import { INCREASE, DECREASE, RESET, SET, ASYNC_INCREASE } from './actionCreator';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return 0;
    case SET:
      return action.amount;
    case ASYNC_INCREASE:
      return state + action.amount;
    default:
      return state;
  }
}

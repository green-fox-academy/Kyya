export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';
export const SET = 'SET';

export const ASYNC_INCREASE = 'ASYNC_INCREASE';

export function increaseCounter() {
  return { type: INCREASE };
}

export function decreaseCounter() {
  return { type: DECREASE };
}

export function resetCounter() {
  return { type: RESET };
}

export function setCounter(amount = 0) {
  return { type: SET, amount };
}

export function asyncIncreaseCounter(amount, delay) {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: ASYNC_INCREASE, amount }), delay);
  }
}

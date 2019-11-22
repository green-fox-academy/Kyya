export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';
export const SET = 'SET';

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

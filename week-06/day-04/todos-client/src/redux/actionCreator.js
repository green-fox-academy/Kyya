export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';

export const FETCH_TODO_START = 'FETCH_TODO_START';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
const API_PREFIX = '/api/v1';
const API = `${API_URL}${API_PREFIX}`;

export function addTodo(text) {
  return (dispatch) => {
    fetch(`${API}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error('Unexpected HTTP Code');
    })
    .then(response => dispatch({ type: ADD_TODO_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: ADD_TODO_FAILURE, payload: error.message }));
  }
}

export function removeTodo(id) {
  return (dispatch) => {
    fetch(`${API}/todos/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.status === 204) {
          return dispatch({ type: REMOVE_TODO_SUCCESS, payload: id });
        }
        throw new Error('Unexpected HTTP Code');
      })
      .catch(error => dispatch({ type: REMOVE_TODO_FAILURE, payload: error.message }));
  }
}

export function toggleTodo(todo) {
  return (dispatch) => {
    fetch(`${API}/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, done: !todo.done })
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Unexpected HTTP Code');
    })
    .then(response => dispatch({ type: TOGGLE_TODO_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: TOGGLE_TODO_FAILURE, payload: error.message }));
  }
}

export function fetchTodo() {
  return (dispatch) => {
    fetch(`${API}/todos`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Unexpected HTTP Code');
      })
      .then(response => dispatch({ type: FETCH_TODO_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: FETCH_TODO_FAILURE, payload: error.message }));
  }
}

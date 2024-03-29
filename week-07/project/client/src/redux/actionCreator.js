import { API_URL } from '../config';

export const FETCH_POST_STARTED = 'FETCH_POST_STARTED';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const SEND_VOTE = 'SEND_VOTE';
export const SEND_VOTE_SUCCESS = 'SEND_VOTE_SUCCESS';
export const SEND_VOTE_FAILURE = 'SEND_VOTE_FAILURE';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED';

export function createPost(title, url) {
  return (dispatch) => {
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url })
    })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error('Unexpected status code: ' + response.statusCode);
    })
    .then(response => dispatch({ type: CREATE_POST_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: CREATE_POST_FAILURE, payload: error.message }));
  }
}

export function fetchPost() {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_STARTED });
    fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Unexpected status code: ' + response.statusCode);
      })
      .then(response => dispatch({ type: FETCH_POST_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: FETCH_POST_FAILURE, payload: error.message }));
  }
}

export function sendVote(pid, score) {
  return (dispatch) => {
    fetch(`${API_URL}/posts/${pid}/${score}`, {
      method: 'PUT',
      body: JSON.stringify({ uid: 1 }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error('Unexpected status code: ' + response.status);
      })
      .then(response => dispatch({ type: SEND_VOTE_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: SEND_VOTE_FAILURE, payload: error.message }));
  }
}

export function removePost(pid) {
  return (dispatch, getState) => {
    const { user } = getState();
    if (!user) {
      return dispatch({ type: AUTHORIZATION_REQUIRED });
    }
    fetch(`${API_URL}/posts/${pid}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${user.token}`}
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Unexpected status code: ' + response.status);
    })
    .then(response => dispatch({ type: REMOVE_POST_SUCCESS, payload: parseInt(pid) }))
    .catch(error => dispatch({ type: REMOVE_POST_FAILURE, payload: error.message }));
  }
}

export function loginUser(username, password, history) {
  return (dispatch) => {
    fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.trim(),
        password: password.trim()
      })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Unexpected status code');
      })
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.user));
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
        history.push('/');
      })
      .catch(error => dispatch({ type: LOGIN_USER_FAILURE, payload: error.message }));
  }
}

export function registerUser(username, password, email) {
  return (dispatch) => {
    return fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Unexpected status code');
      })
      .then(response => dispatch({ type: REGISTER_USER_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: REGISTER_USER_FAILURE, payload: error.message }))
  }
}

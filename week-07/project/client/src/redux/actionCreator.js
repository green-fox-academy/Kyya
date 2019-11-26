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

export function createPost(title, url) {
  return (dispatch) => {
    fetch(`${API_URL}/posts`, {
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
  return (dispatch) => {
    fetch(`${API_URL}/posts/${pid}`, {
      method: 'DELETE'
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

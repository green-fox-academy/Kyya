import { API_URL } from '../config';

export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST_STARTED = 'FETCH_POST_STARTED';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export function fetchPost() {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_STARTED });
    fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.statusCode === 200) {
          return response.json();
        }
        throw new Error('Unexpected status code: ' + response.statusCode);
      })
      .then(response => dispatch({ type: FETCH_POST_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: FETCH_POST_FAILURE, payload: error.message }));
  }
}

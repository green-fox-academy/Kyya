export const FETCH_POST_STARTED = 'FETCH_POST_STARTED';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

const URL = 'https://jsonplaceholder.typicode.com/posts';

export function fetchPostStarted() {
  return { type: FETCH_POST_STARTED };
}

export function fetchPostSuccess(posts) {
  return { type: FETCH_POST_SUCCESS, payload: posts };
}

export function fetchPostFailure(error) {
  return { type: FETCH_POST_FAILURE, payload: error.message};
}

export function fetchPost() {
  return (dispatch) => {
    dispatch(fetchPostStarted());
    fetch(URL)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Can not fetch posts.");
        }
        return response.json();
      })
      .then(response => dispatch(fetchPostSuccess(response.slice(0, 10))))
      .catch(error => dispatch(fetchPostFailure(error)));
  }
}

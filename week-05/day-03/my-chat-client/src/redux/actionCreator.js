export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_LOCAL = 'SEND_MESSAGE_LOCAL';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const GET_MESSAGE = 'GET_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RELOAD_MESSAGE = 'RELOAD_MESSAGE';

export const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

const URL = 'https://stream-vanadium.glitch.me/messages';
const MYSELF = 'Kyya';

export function getMessage() {
  return { type: GET_MESSAGE };
}

export function receiveMessage(messages) {
  return { type: RECEIVE_MESSAGE, payload: messages };
}

export function fetchMessageFailure(error) {
  return { type: FETCH_MESSAGE_FAILURE, payload: error.message };
}

export function fetchMessage() {
  return (dispatch) => {
    dispatch(getMessage());
    fetch(URL)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Cannot fetch messages.');
        }
        return response.json();
      })
      .then(response => dispatch(receiveMessage(response.messages.sort((a, b) => (a.id - b.id)))))
      .catch(error => fetchMessageFailure(error));
  }
}

export function reloadMessage() {
  return fetchMessage();
}

export function sendMessage(text) {
  return (dispatch) => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ user: MYSELF, text, style: { color: '#000', background: '#98e165' } }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Cannot send message');
        }
        return response.json();
      })
      .then(response => dispatch({ type: SEND_MESSAGE_SUCCESS, payload: response }))
      .catch(error => dispatch({ type: SEND_MESSAGE_FAILURE, payload: error.message }));
  }
}

let id = 100;
export function sendMessageLocal(text) {
  id++;
  return { type: SEND_MESSAGE_LOCAL, payload: { id, user: MYSELF, text }}
}

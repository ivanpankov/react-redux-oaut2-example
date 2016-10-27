export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const requestToken = event => ({
    type: REQUEST_TOKEN,
    text: event.target.value
});

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const requestTokenSuccess = event => ({
    type: REQUEST_TOKEN_SUCCESS,
    text: event.target.value
});


export const REQUEST_TOKEN_FAIL = 'REQUEST_TOKEN_FAIL';
export const requestTokenFail = event => ({
    type: REQUEST_TOKEN_FAIL,
    text: event.target.value
});

const tokenRequest = new Request('/auth/github/profile', {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
});

export const fetchToken = () => dispatch => {

    dispatch(requestToken());

    return fetch(usersRequest)
        .then(response => {
            return response.json();
        })
        .then(users => {
            dispatch(receiveUsersSuccess(users));
        })
        .catch(error => {
            dispatch(receiveUsersFail(error));
            dispatch(notification.error(error.toString()));
        });
};

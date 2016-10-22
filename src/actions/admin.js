import { notification } from './notification';

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({
    type: REQUEST_USERS,
    users: ['Fetching users ...'],
    error: null
});

export const RECEIVE_USERS_SUCCESS = 'RECEIVE_USERS_SUCCESS';
export const receiveUsersSuccess = users => ({
    type: RECEIVE_USERS_SUCCESS,
    users,
    error: null
});

export const RECEIVE_USERS_FAIL = 'RECEIVE_USERS_FAIL';
export const receiveUsersFail = error => ({
    type: RECEIVE_USERS_FAIL,
    users: [],
    error
});

const usersRequest = new Request('/api/admin/users.json', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
});



export const fetchUsers = () => dispatch => {

    dispatch(requestUsers());

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

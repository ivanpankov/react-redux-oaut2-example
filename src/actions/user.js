import {notification} from './notification';
import Auth, {authPaths, authTypes} from '../helpers/Auth';

const auth = new Auth('access_token_github');

export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const toggleLoginModal = () => ({
    type: TOGGLE_LOGIN_MODAL
});


export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const requestToken = event => ({
    type: REQUEST_TOKEN
});

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const requestTokenSuccess = credentials => {

    auth.setToken(credentials['access_token']);

    return {
        type: REQUEST_TOKEN_SUCCESS,
        profile: credentials.profile
    };
};


export const REQUEST_TOKEN_FAIL = 'REQUEST_TOKEN_FAIL';
export const requestTokenFail = error => ({
    type: REQUEST_TOKEN_FAIL,
    error
});

const authSocial = (authType, dispatch) => {
    const url = authPaths[authType],
        width = 1000,
        height = 650,
        top = (window.outerHeight - height) / 2,
        left = (window.outerWidth - width) / 2;

    dispatch(requestToken());

    const popup = window.open(url, 'GitHub_login', 'width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' + left);

    const unsubscribeId = window.addEventListener("message", messageHandler, false);


    function messageHandler(event) {
        const isSenderExpected = event.source === popup && event.data.type == 'access_token_github' &&
            event.origin === 'http://localhost:3000';

        if (isSenderExpected) {
            window.removeEventListener(unsubscribeId, messageHandler);
            dispatch(requestTokenSuccess(event.data));
        }
    }
};

const authLocal = (authType, dispatch, payload) => {
    let body;

    try {
        body = JSON.stringify(payload);
    } catch (error){
        dispatch(requestTokenFail(error));
        dispatch(notification.error(error.toString()));
        return;
    }

    const loginRequest = new Request(authPaths[authType], {
        method: 'POST',
        mode: 'cors',
        body: body,
        headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        })
    });

    dispatch(requestToken());

    return fetch(loginRequest)
        .then(response => {
            return response.json();
        })
        .then(user => {
            console.log(user);
            dispatch(requestTokenSuccess(user));
        })
        .catch(error => {
            console.log(error);
            dispatch(requestTokenFail(error));
            dispatch(notification.error(error.toString()));
        });
};


export const logIn = (authType, payload) => dispatch => {
    switch (authType) {
        case authTypes.GITHUB:
        case authTypes.FACEBOOK:
            authSocial(authType, dispatch);
            break;

        case authTypes.LOCAL:
            authLocal(authType, dispatch, payload);
            break;

    }

    // const testCredentials = {
    //   profile: {
    //     photo: 'https://avatars.githubusercontent.com/u/3731333?v=3',
    //     displayName: 'Ivan Pankov'
    //   },
    //   'access_token': 'github_test_jwt.AAAAAAAAAAbsoierjfpoie20394873oirtjp34',
    //   'expires_in': '23455',
    //   type: 'access_token_github'
    // };

    // dispatch(requestTokenSuccess(testCredentials));
};

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => {
    auth.removeToken();

    return {
        type: LOG_OUT
    };
};

import {notification} from './notification';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const requestToken = event => ({
    type: REQUEST_TOKEN
});

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const requestTokenSuccess = credentials => {

    // TODO: save token

    return {
        type: REQUEST_TOKEN_SUCCESS,
        profile: credentials.profile
    };
};


export const REQUEST_TOKEN_FAIL = 'REQUEST_TOKEN_FAIL';
export const requestTokenFail = event => ({
    type: REQUEST_TOKEN_FAIL,
    text: event.target.value
});

const login = (callback) => {
    const url = '/auth/github',
        width = 1000,
        height = 650,
        top = (window.outerHeight - height) / 2,
        left = (window.outerWidth - width) / 2;


    const popup = window.open(url, 'GitHub_login', 'width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' + left);

    var unsubscribeId = window.addEventListener("message", messageHandler, false);

    function messageHandler(event) {
        const isSenderExpected = event.source === popup && event.data.type == 'access_token_github' &&
            event.origin === 'http://localhost:3000';

        if (isSenderExpected) {
            window.removeEventListener(unsubscribeId, messageHandler);
            callback(event.data);
        }
    }
};

export const fetchToken = () => dispatch => {

    login((credentials) => {
        dispatch(requestTokenSuccess(credentials));
    });
};

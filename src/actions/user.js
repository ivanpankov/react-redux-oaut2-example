// import { notification } from './notification';
import Auth from '../helpers/Auth';

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
export const requestTokenFail = event => ({
  type: REQUEST_TOKEN_FAIL,
  text: event.target.value
});


export const loginGitHub = () => dispatch => {

  // const url = '/auth/github',
  //   width = 1000,
  //   height = 650,
  //   top = (window.outerHeight - height) / 2,
  //   left = (window.outerWidth - width) / 2;
  //
  //
  // const popup = window.open(url, 'GitHub_login', 'width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' + left);
  //
  // const unsubscribeId = window.addEventListener("message", messageHandler, false);



  // function messageHandler(event) {
  //   console.log(event.data);
  //   const isSenderExpected = event.source === popup && event.data.type == 'access_token_github' &&
  //     event.origin === 'http://localhost:3000';
  //
  //   if (isSenderExpected) {
  //     window.removeEventListener(unsubscribeId, messageHandler);
  //     dispatch(requestTokenSuccess(event.data));
  //   }
  // }

  const testCredentials = {
    profile: {
      photo: 'https://avatars.githubusercontent.com/u/3731333?v=3',
      displayName: 'Ivan Pankov'
    },
    'access_token': 'github_test_jwt.AAAAAAAAAAbsoierjfpoie20394873oirtjp34',
    'expires_in': '23455',
    type: 'access_token_github'
  };

  dispatch(requestTokenSuccess(testCredentials));
};

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => {
  auth.removeToken();

  return {
    type: LOG_OUT
  };
};

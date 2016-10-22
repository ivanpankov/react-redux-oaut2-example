const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const initialAuth = {
    loggingIn: false,
    loggedIn: false,
    loginError: null,
    user: null
};

const auth = (state = initialAuth, action = {}) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            };
            
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.user,
                loginError: null
            };
            
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: null,
                loginError: action.error
            };

        default:
            return state;
    }
};

export default auth;

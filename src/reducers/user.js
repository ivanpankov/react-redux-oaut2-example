import { REQUEST_TOKEN_SUCCESS, TOGGLE_LOGIN_MODAL } from '../actions/user';

const initialUser = {
    isAuthenticated: false,
    showLoginModal: false,
    name: 'User Name',
    email: 'rwecrf@asdf.com',
    photo: 'path_to_photo.png'
};

const user = (state = initialUser, action = {}) => {
    switch (action.type) {
        case REQUEST_TOKEN_SUCCESS:
            return {
                ...state,
                name: action.profile.displayName,
                isAuthenticated: true,
                photo: action.profile.photo,
                showLoginModal: false,
            };

        case TOGGLE_LOGIN_MODAL:
            console.log('toggle');
            return {
              ...state,
                showLoginModal: !state.showLoginModal
            };

        default:
            return state;
    }
};

export default user;

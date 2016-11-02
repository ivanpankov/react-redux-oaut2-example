import { REQUEST_TOKEN_SUCCESS, TOGGLE_LOGIN_MODAL, LOG_OUT } from '../actions/user';

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
                photo: action.profile.photo,
                isAuthenticated: true,
                showLoginModal: false
            };

        case TOGGLE_LOGIN_MODAL:
            return {
              ...state,
                showLoginModal: !state.showLoginModal
            };

        case LOG_OUT:
          return {
              ...state,
              name: '',
              photo: '',
              isAuthenticated: false,
              showLoginModal: false
          };

        default:
            return state;
    }
};

export default user;

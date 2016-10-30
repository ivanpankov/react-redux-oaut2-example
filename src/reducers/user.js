import { REQUEST_TOKEN_SUCCESS } from '../actions/user';

const initialUser = {
    isAuthenticated: false,
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
                photo: action.profile.photo
            };

        default:
            return state;
    }
};

export default user;

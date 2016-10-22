import { REQUEST_USERS, RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAIL } from '../actions/admin';


const initialAdmin = {
    testString: 'Admin page!',
    users: [],
    error: null
};

const admin = (state = initialAdmin, action = {}) => {
    switch (action.type) {
        case REQUEST_USERS:
        case RECEIVE_USERS_SUCCESS:
        case RECEIVE_USERS_FAIL:
            return {
                ...state,
                users: action.users,
                error: action.error
            };

        default:
            return state;
    }
};

export default admin;

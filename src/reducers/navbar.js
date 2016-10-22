import { TOGGLE_NAVBAR } from '../actions/navbar';

const initialNavbar = {
    userName: 'User Name',
    userPicture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg',
    isCollapsed: true
};

const navbar = (state = initialNavbar, action = {}) => {
    switch (action.type) {

        case TOGGLE_NAVBAR:
            return {
                ...state,
                isCollapsed: !state.isCollapsed
            };

        default:
            return state;
    }
};

export default navbar;

import { TOGGLE_NAVBAR } from '../actions/navbar';

const initialNavbar = {
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

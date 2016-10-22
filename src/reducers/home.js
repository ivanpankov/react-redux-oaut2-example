import { TYPE_TEXT } from '../actions/home';

const initialHome = {
    testString: 'I\'m at home',
    text: ''
};

const home = (state = initialHome, action = {}) => {
    switch (action.type) {

        case TYPE_TEXT:
            return { ...state, text: action.text };

        default:
            return state;
    }
};

export default home;

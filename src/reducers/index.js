import { combineReducers } from 'redux';
import navbar from './navbar';
import home from './home';
import about from './about';
import contact from './contact';
import admin from './admin';
import notifications from './notifications';
import user from './user';

const index = combineReducers({
    navbar,
    home,
    about,
    contact,
    admin,
    notifications,
    user
});

export default index;

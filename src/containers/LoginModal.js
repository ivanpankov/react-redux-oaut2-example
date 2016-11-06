import {connect} from 'react-redux';
import LoginModal from '../components/LoginModal';
import {logIn, toggleLoginModal} from '../actions/user';
import {authTypes} from '../helpers/Auth';

const mapDispatchToProps = dispatch => ({
    loginGitHub: () => {
        dispatch(logIn(authTypes.GITHUB));
    },
    loginFacebook: () => {
        dispatch(logIn(authTypes.FACEBOOK));
    },
    toggleLoginModal: () => {
        dispatch(toggleLoginModal());
    }
});

export default connect(null, mapDispatchToProps)(LoginModal);

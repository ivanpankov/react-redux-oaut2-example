import {connect} from 'react-redux';
import LoginModal from '../components/LoginModal';
import {logIn, toggleLoginModal} from '../actions/user';

const mapDispatchToProps = dispatch => ({
    logIn: (authType, payload) => {
        console.log(authType, payload);
        dispatch(logIn(authType, payload));
    },
    toggleLoginModal: () => {
        dispatch(toggleLoginModal());
    }
});

export default connect(null, mapDispatchToProps)(LoginModal);

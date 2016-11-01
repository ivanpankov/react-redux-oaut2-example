import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import {loginGitHub, toggleLoginModal} from '../actions/user';

const mapDispatchToProps = dispatch => ({
  loginGitHub: () => {
    dispatch(loginGitHub());
  },
  toggleLoginModal: () => {
    dispatch(toggleLoginModal());
  }
});

export default connect(null, mapDispatchToProps)(LoginModal);

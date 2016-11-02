import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import {loginGitHub, toggleLoginModal} from '../actions/user';

const mapDispatchToProps = dispatch => ({
  loginGitHub: () => {
    console.log('login action');
    dispatch(loginGitHub());
  },
  toggleLoginModal: () => {
    console.log('toggle');
    dispatch(toggleLoginModal());
  }
});

export default connect(null, mapDispatchToProps)(LoginModal);

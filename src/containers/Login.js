import { connect } from 'react-redux';
import Login from '../components/Login';
import {loginGitHub} from '../actions/user';

const mapStateToProps = ({ user }) => {
    return {
        isAuthenticated: user.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => ({
    loginGitHub: () => {
        dispatch(loginGitHub());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

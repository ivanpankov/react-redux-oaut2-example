import { connect } from 'react-redux';
import Login from '../components/Login';
import {fetchToken} from '../actions/user';

const mapStateToProps = ({ user }) => {
    return {
        isAuthenticated: user.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => ({
    loginGitHub: () => {
        dispatch(fetchToken());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

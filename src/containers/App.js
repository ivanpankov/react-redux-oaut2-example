import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = ({ user }) => ({
    isAuthenticated: user.isAuthenticated,
    showLoginModal: user.showLoginModal
});

export default connect(mapStateToProps)(App);

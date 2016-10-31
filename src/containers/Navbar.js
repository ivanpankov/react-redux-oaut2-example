import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import {toggleNavbar} from '../actions/navbar';

const mapStateToProps = ({navbar, user}) => ({
    isCollapsed: navbar.isCollapsed,
    isAuthenticated: user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    }
});

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Navbar);

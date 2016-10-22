import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { toggleNavbar } from '../actions/navbar';

const mapStateToProps = ({ navbar }) => ({
    userName: navbar.userName,
    userPicture: navbar.userPicture,
    isCollapsed: navbar.isCollapsed
});

const mapDispatchToProps = dispatch => ({
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Navbar);

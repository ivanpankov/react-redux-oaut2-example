import {connect} from 'react-redux';
import User from '../components/user/User';
import { toggleLoginModal, logOut } from '../actions/user';

const mapStateToProps = ({user}) => {
    return user;
};

const mapDispatchToProps = dispatch => ({
    toggleLoginModal: () => {
        dispatch(toggleLoginModal());
    },
    logOut: () => {
        dispatch(logOut());
    }
});


export default connect(mapStateToProps, mapDispatchToProps, null)(User);

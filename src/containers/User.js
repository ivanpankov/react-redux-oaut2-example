import {connect} from 'react-redux';
import User from '../components/User';
import { toggleLoginModal } from '../actions/user';

const mapStateToProps = ({user}) => {
    return user;
};

const mapDispatchToProps = dispatch => ({
    toggleLoginModal: () => {
        dispatch(toggleLoginModal());
    }
});


export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(User);

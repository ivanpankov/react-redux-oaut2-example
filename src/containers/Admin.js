import { connect } from 'react-redux';
import Admin from '../components/Admin';
import { fetchUsers, usersAreFetched } from '../actions/admin';

const mapStateToProps = state => ({
    testString: state.admin.testString,
    users: state.admin.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

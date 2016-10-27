import {connect} from 'react-redux';
import User from '../components/User';

const mapStateToProps = ({user}) => {
    return user;
};

export default connect(mapStateToProps)(User);

import { connect } from 'react-redux';
import Notifications from '../components/Notifications';

const mapStateToProps = ({ notifications }) => ({
    notifications
});

export default connect(mapStateToProps)(Notifications);

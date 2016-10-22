import { connect } from 'react-redux';
import Contact from '../components/Contact';

const mapStateToProps = state => ({
    testString: state.contact.testString
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

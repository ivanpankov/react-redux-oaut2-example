import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = state => ({
    testString: state.about.testString
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(About);

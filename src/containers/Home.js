import { connect } from 'react-redux';
import Home from '../components/Home';
import { typeText } from '../actions/home';

const mapStateToProps = (state, ownProps) => {
    return {
        testString: state.home.testString,
        text: state.home.text
    };
};

const mapDispatchToProps = dispatch => ({
    typeText: text => {
        dispatch(typeText(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
    navbar: state.navbar,
    home: state.home
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

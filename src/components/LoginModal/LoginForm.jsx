import React, {Component} from 'react';
import Text from '../../partials/Text';
import CheckBox from '../../partials/CheckBox';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rememberMe: false
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRememberMeChange = this.onRememberMeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onRememberMeChange(event) {
        this.setState({rememberMe: event.target.checked});
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.submit({
            ...this.state
        });
    }

    render() {
        const {username, password, rememberMe} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <Text addOnClass="fa fa-envelope-o fa-fw" name="username" placeholder="email address"
                      value={username} onChange={this.onUsernameChange}/>

                <Text addOnClass="fa fa-key fa-fw" name="password" placeholder="Password"
                      value={password} onChange={this.onPasswordChange}/>

                <span className="messages">{this.props.message}</span>

                <CheckBox value="remember-me" text="Remember Me" onChange={this.onRememberMeChange}
                          defaultChecked={rememberMe}/>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
        );
    }
};

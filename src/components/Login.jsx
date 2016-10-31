import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {loginGitHub} = this.props;

        return (
            <div id="login" className="container">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h3>Login</h3>
                    </div>
                </div>
                <div className="row social-buttons">
                    <div className="col-xs-4 col-sm-2 col-sm-offset-3">
                        <button onClick={loginGitHub} className="btn btn-block btn-primary">
                            <i className="fa fa-github visible-xs"></i>
                            <span className="hidden-xs">GitHub</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-sm-2">
                        <a href="#" className="btn btn-block btn-success">
                            <i className="fa fa-twitter visible-xs"></i>
                            <span className="hidden-xs">Twitter</span>
                        </a>
                    </div>
                    <div className="col-xs-4 col-sm-2">
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fa fa-google-plus visible-xs"></i>
                            <span className="hidden-xs">Google+</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                        <hr />
                        <h4 className="or">or</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                        <form action="">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="text" className="form-control" name="username" placeholder="email address"
                                       autoComplete="off"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" className="form-control" name="password" placeholder="Password"
                                       autoComplete="off"/>
                            </div>
                            <span className="messages">&nbsp;</span>
                            <label className="checkbox pull-right">
                                <input type="checkbox" value="remember-me"/>Remember Me
                            </label>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

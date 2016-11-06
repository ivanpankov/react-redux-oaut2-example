import React, {Component}  from 'react';
import SocialButton from './SocialButton';
import LoginForm from './LoginForm';
import {authTypes} from '../../helpers/Auth';

import "./styles.less";

export default class LoginModal extends Component {
    constructor(props){
        super(props);

        this.loginGitHub = this.props.logIn.bind(this, authTypes.GITHUB, null);
        this.loginFacebook = this.props.logIn.bind(this, authTypes.FACEBOOK, null);
        this.loginLocal = this.props.logIn.bind(this, authTypes.LOCAL);
    }

    render() {
        const {toggleLoginModal, message} = this.props;

        return (
            <div className="modal fade in" tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <button type="button" className="close" onClick={toggleLoginModal}>
                                <span>&times;</span>
                            </button>
                            <h3>Login</h3>
                        </div>
                        <div className="modal-body">
                            <div id="login">
                                <div className="row social-buttons">
                                    <div className="col-xs-4 col-sm-2 col-sm-offset-3">
                                        <SocialButton text="GitHub" onClick={this.loginGitHub} colorClass="btn-primary"
                                                      iconClass="fa fa-github" />
                                    </div>
                                    <div className="col-xs-4 col-sm-2">
                                        <SocialButton text="Facebook" onClick={this.loginFacebook} colorClass="btn-success"
                                                      iconClass="fa fa-facebook" />
                                    </div>
                                    <div className="col-xs-4 col-sm-2">
                                        <SocialButton text="Google+" onClick={() => {}} colorClass="btn-danger"
                                                      iconClass="fa fa-google-plus" />
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
                                        <LoginForm message={message} submit={this.loginLocal}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const LoginModal_X = ({loginGitHub, loginFacebook, loginLocal, login, message, toggleLoginModal}) => (
    <div className="modal fade in" tabIndex="-1">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <button type="button" className="close" onClick={toggleLoginModal}>
                        <span>&times;</span>
                    </button>
                    <h3>Login</h3>
                </div>
                <div className="modal-body">
                    <div id="login">
                        <div className="row social-buttons">
                            <div className="col-xs-4 col-sm-2 col-sm-offset-3">
                                <SocialButton text="GitHub" onClick={loginGitHub} colorClass="btn-primary"
                                              iconClass="fa fa-github" />
                            </div>
                            <div className="col-xs-4 col-sm-2">
                                <SocialButton text="Facebook" onClick={loginFacebook} colorClass="btn-success"
                                              iconClass="fa fa-facebook" />
                            </div>
                            <div className="col-xs-4 col-sm-2">
                                <SocialButton text="Google+" onClick={loginGooglePlus} colorClass="btn-danger"
                                              iconClass="fa fa-google-plus" />
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
                                <LoginForm message={message}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// export default LoginModal;
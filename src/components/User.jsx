import React from 'react';
import NavLink from './NavLink';

const renderLogin = (toggleLoginModal) => {
  return (
    <span className="nav navbar-nav navbar-right" onClick={toggleLoginModal}>
      <span>Login&nbsp;</span>
      <span className="fa fa-user-circle"></span>
    </span>
  );
};

const renderCredentials = (name, photo) => {
  return (
    <div className="nav navbar-nav navbar-right">
      <li><a>{name}</a></li>
      <li className="user-picture"><img src={photo} height="42" width="42"/></li>
    </div>
  );
};

const User = ({ isAuthenticated, name, photo, toggleLoginModal }) => {
  return (
    <div id="profile">
      { isAuthenticated ? renderCredentials(name, photo) : renderLogin(toggleLoginModal) }
    </div>
  );
};

export default User;

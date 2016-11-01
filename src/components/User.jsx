import React from 'react';
import NavLink from './NavLink';

const renderLogin = (toggleLoginModal) => {
  return (
    <span className="nav navbar-nav navbar-right login" onClick={toggleLoginModal}>
      <span>Login&nbsp;</span>
      <span className="fa fa-user-circle"></span>
    </span>
  );
};

const renderCredentials = (name, photo) => {
  return (
    <span className="nav navbar-nav navbar-right">
      <span>{name}</span>
      <span className="user-picture"><img src={photo} height="42" width="42"/></span>
    </span>
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

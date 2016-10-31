import React from 'react';
import NavLink from './NavLink';

const renderLogin = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <NavLink to="/login">
        <span>Login</span><span className="glyphicon glyphicon-user"></span>
      </NavLink>

    </ul>
  );
};

const renderCredentials = (name, photo) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li><a>{name}</a></li>
      <li className="user-picture"><img src={photo} height="42" width="42"/></li>
    </ul>
  );
};

const User = ({ isAuthenticated, name, photo }) => {
  return (
    <div id="profile">
      { isAuthenticated ? renderCredentials(name, photo) : renderLogin() }
    </div>
  );
};

export default User;

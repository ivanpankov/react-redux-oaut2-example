import React from 'react';
import Navbar from '../containers/Navbar';
import Notifications from '../containers/Notifications'
import LoginModal from '../containers/LoginModal';

const App = ({ children, isAuthenticated, showLoginModal }) => (
    <div className="container">
        <Navbar />
        <Notifications />
        {children}
        { !isAuthenticated && showLoginModal ? <LoginModal /> : '' }
    </div>
);

export default App;

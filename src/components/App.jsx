import React from 'react';
import Navbar from '../containers/Navbar';
import Notifications from '../containers/Notifications'

const App = ({ children }) => (
    <div className="container">
        <Navbar />
        <Notifications />
        {children}
    </div>
);

export default App;

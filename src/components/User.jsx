import React from 'react';

const User = ({name, photo}) => {
    return (
        <div id="profile">
            <ul className="nav navbar-nav navbar-right">
                <li><a>{name}</a></li>
                <li><img src={photo} height="42" width="42" /></li>
            </ul>
        </div>
    );
};

export default User;

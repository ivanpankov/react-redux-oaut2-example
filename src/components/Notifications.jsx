import React from 'react';
import {
    NOTIFICATION_TYPE_INFO,
    NOTIFICATION_TYPE_WARNING,
    NOTIFICATION_TYPE_ERROR,
    NOTIFICATION_TYPE_SUCCESS
} from '../actions/notification';

const classNames = {
    [NOTIFICATION_TYPE_INFO]: 'alert-info',
    [NOTIFICATION_TYPE_WARNING]: 'alert-warning',
    [NOTIFICATION_TYPE_ERROR]: 'alert-danger',
    [NOTIFICATION_TYPE_SUCCESS]: 'alert-success'
};

const Notifications = ({ notifications }) => (
    <div id="notifications" className="container">
        <ul>
            {notifications.map(
                ({ text, notificationId, notificationType }) =>
                    <li key={notificationId}>
                        <div className={`alert ${classNames[notificationType]}`}>{text}</div>
                    </li>
            )}
        </ul>
    </div>
);

export default Notifications;

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notification';

const initialNotifications = [];


const notifications = (state = initialNotifications, action = {}) => {
    switch (action.type) {

        case ADD_NOTIFICATION:
            return [
                ...state,
                {
                    text: action.text,
                    notificationType: action.notificationType,
                    notificationId: action.notificationId
                }
            ];

        case REMOVE_NOTIFICATION:
            return state.filter(item => item.notificationId !== action.notificationId);

        default:
            return state;
    }
};

export default notifications;

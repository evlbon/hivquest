import {notification} from 'antd';

const callback = (type, message, description) => {
    notification[type]({
        message,
        description,
    });
};

const callbacks = {
    error: message => callback('error', message),
    success: message => callback('success', message),
};

export default callbacks
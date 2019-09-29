const baseUrl = 'http://116.203.200.150:10200/api';

const endpoints = {
    registration: `${baseUrl}/auth/registration/`,
    login: `${baseUrl}/auth/login`,
};

export default endpoints;
// const getEndPoint = type => `${baseUrl}${endpoints[type]}`;
import axios from 'axios'
import endpoints from "./endpoints";
import callbacks from "./callbacks";

const login = (value, callback) => {
    const endPoint = endpoints.login;

    const body = JSON.stringify(value);

    return axios({
        "method": "POST",
        "url": endPoint,
        "data": body,
        headers: {
            'Content-Type': 'application/json',
        },
    })
};

const registration = async (value) => {
    const endPoint = endpoints.registration;

    const body = JSON.stringify(value);

    return axios({
        "method": "POST",
        "url": endPoint,
        "data": body,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // .then((response) => {
    //     callbacks.success('Success');
    //     return response;
    // })
    // .catch((error) => {
    //     callbacks.error(error.message)
    // });
};

const requests = {
    login, registration
};

export default requests;
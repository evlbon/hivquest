import axios from 'axios'
import endpoints from "./endpoints";
import callbacks from "./callbacks";

const login = (value, callback) => {
    const endPoint = endpoints.login;

    const body = JSON.stringify(value);

    return axios(endPoint, {
        data: body,
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })

    // return axios({
    //     "method": "POST",
    //     "url": endPoint,
    //     "data": body,
    //     "headers": {
    //         "Content-Type": "application/json"
    //     }
    // })

    // return axios.post(endPoint,body)

    // axios({
    //     "method": "POST",
    //     "url": endPoint,
    //     "data": body
    // })
    //     .then((response) => {
    //         return response;
    //     })
    //     .catch((error) => {
    //         callbacks.error(error.message)
    //     });
};

const registration = async (value) => {
    const endPoint = endpoints.registration;

    const body = JSON.stringify(value);

    return axios({
        "method": "POST",
        "url": endPoint,
        "data": body
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
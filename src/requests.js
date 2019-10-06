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
};


const startGame = async (token) => {
    const endPoint = endpoints.startGame;

    return axios({
        "method": "POST",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    })
};

const cities = async (value) => {
    const endPoint = endpoints.cities;

    return axios({
        "method": "GET",
        "url": endPoint,
        params: value,
        headers: {
            'Content-Type': 'application/json',
        },
    })
};

const requests = {
    login, registration, cities, startGame
};

export default requests;
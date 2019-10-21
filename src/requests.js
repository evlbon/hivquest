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

const getSlide = async (token, id) => {
    const endPoint = endpoints.getSlide;
    console.log(id)
    // console.log({previous: id - id%3, token});

    return axios({
        "method": "GET",
        "url": endPoint,
        params: {previous: id - id % 3},
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    })
};

const getUser = async (token) => {
    const endPoint = endpoints.getUser;

    return axios({
        "method": "GET",
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

const responseInteraction = (token, value) => {
    const endPoint = endpoints.responseInteraction;
    // const body = JSON.stringify(value);

    let ans = 0;

    axios({
        "method": "POST",
        "url": endPoint,
        "data": value,
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    }).then(r => {ans =1 }).catch(e => callbacks.error(e.message));

    return ans
};

const requests = {
    login, registration, cities, startGame, getSlide, getUser, responseInteraction
};

export default requests;
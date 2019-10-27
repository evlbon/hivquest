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

const finishGame = async (token) => {
    const endPoint = endpoints.finishGame;

    return axios({
        "method": "POST",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    })
};

const adminLogin = (value) => {
    const endPoint = endpoints.adminLogin;

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

const currentSessions = async (token) => {
    const endPoint = endpoints.currentSessions;

    return axios({
        "method": "GET",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    })
};

const finishedPlayers = async (token) => {
    const endPoint = endpoints.finishedPlayers;

    return axios({
        "method": "GET",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token,
        },
    })
};


const adminTurnOn = (token) => {
    const endPoint = endpoints.adminTurnOn;

    return axios({
        "method": "POST",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token

        },
    })
};

const adminTurnOff = (token) => {
    const endPoint = endpoints.adminTurnOff;

    return axios({
        "method": "POST",
        "url": endPoint,
        headers: {
            'Content-Type': 'application/json',
            token
        },
    })
};

const requests = {
    login, registration, cities, startGame, getSlide, getUser, responseInteraction,finishGame,adminLogin,currentSessions,
    finishedPlayers,adminTurnOn,adminTurnOff
};

export default requests;
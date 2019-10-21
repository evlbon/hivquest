import React, {useContext, useReducer} from "react";
import requests from "./requests";
import callbacks from "./callbacks";

const GameContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case'NEXT_SLIDE':
            return {
                ...state,
                currentEpisode: action.payload,
            };
        case'RECEIVE_ACCESS_TOKEN':
            return {
                ...state,
                ...action.payload,
                isAuthorize: true,
            };
        case'LOG_OUT':
            return {
                ...state,
                token: null,
                isAuthorize: false,
            };
        case 'GET_USER':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;

    }
};

export const GameContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {user: null, token: null, isAuthorize: false});

    const logIn = async (value) => {
        try {
            const response = await requests.login(value);

            const {token, gender, name, currentEpisode, points} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('gender', gender);
            localStorage.setItem('name', name);
            localStorage.setItem('currentEpisode', currentEpisode);
            localStorage.setItem('points', points);

            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: {token, gender, name, currentEpisode: parseInt(currentEpisode+1), points},
            })

        } catch (error) {
            callbacks.error(error.response.status === 400?
                'Данные введены не верно или аккаунт не зарегистрирован':error.message)
        }
    };

    const registration = async (value, callback) => {
        try {
            await requests.registration(value);
            callbacks.success('Success');
            callback();
        } catch (e) {
            callbacks.error(e.message)
        }
    };

    const logOut = async () => {

        dispatch({
            type: 'LOG_OUT',
        })
    };

    const getUser = async (login) => {
        const response = 'todo';

        dispatch({
            type: 'GET_USER',
            payload: response.data,
        })
    };

    const nextSlide = (id) => {
        localStorage.setItem('currentEpisode', `${id}`);
        dispatch({
            type: 'NEXT_SLIDE',
            payload: id,
        })
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');

        const gender = localStorage.getItem('gender');
        const name = localStorage.getItem('name');
        const currentEpisode = localStorage.getItem('currentEpisode');
        const points = localStorage.getItem('points');

        if (token && token !== 'undefined') {
            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: {token, gender, name, currentEpisode: parseInt(currentEpisode), points},
            });
        }
        if (token && token !== 'undefined') {
            requests.getUser(token).then(r => {
                dispatch({
                    type: 'RECEIVE_ACCESS_TOKEN',
                    payload: { points: r.data.points},
                })
            });
        }
    };

    const responseInteraction = (token,value) => {
        requests.responseInteraction(token, value);
        getPoints(token);
    };

    const getPoints = (token) => {
        requests.getUser(token).then(r => {
            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: { points: r.data.points},
            })
        });
    };

    const actions = {registration, logIn, logOut, getUser, checkAuth, nextSlide, responseInteraction, getPoints};

    return (
        <GameContext.Provider value={{state, actions}}>
            {children}
        </GameContext.Provider>
    )
};

export const useGameState = () => {
    return useContext(GameContext).state
};

export const useGameAction = () => {
    return useContext(GameContext).actions
};
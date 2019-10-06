import React, {useContext, useReducer} from "react";
import requests from "./requests";
import callbacks from "./callbacks";

const GameContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case'RECEIVE_ACCESS_TOKEN':
            return {
                ...state,
                token: action.payload,
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

            const token = response.data.token;
            // console.log(token)
            localStorage.setItem('token', token);

            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: token,
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
        console.log(localStorage.getItem('token'))

        localStorage.removeItem('token');
        console.log(localStorage.getItem('token'))

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

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if(token&&token!=='undefined')
            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: token,
            })
    };

    const actions = {registration, logIn, logOut, getUser, checkAuth};

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
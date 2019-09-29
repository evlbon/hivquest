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

            const token = response.token;
            localStorage.setItem('token', token);

            dispatch({
                type: 'RECEIVE_ACCESS_TOKEN',
                payload: token,
            })

        } catch (error) {
            callbacks.error(error.message)
        }
    };

    const registration = async (value) => {
        try {
            await requests.registration(value);
            callbacks.success('Success');
        } catch (e) {
            callbacks.error(e.message)
        }
    };

    const logOut = async () => {
        localStorage.removeItem('token');

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

    const actions = {registration, logIn, logOut, getUser};

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
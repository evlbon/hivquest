import React, {useEffect} from 'react';
import './App.css';
import BaseRouter from './router';
import {useGameAction, useGameState} from "./context";

const c = <div style={{background: "red", height: '100%'}}>X</div>;
// const set = [[4, 4, c]];

const App = () => {
    const {checkAuth} = useGameAction();
    const {isAuthorize} = useGameState();
    useEffect(() =>{
        !isAuthorize&&checkAuth();
    });
    return <BaseRouter/>
};

export default App;

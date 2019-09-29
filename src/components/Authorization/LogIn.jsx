import React from "react";
import './auth.css';
import WrappedLogInForm from "./WrappedLogInForm";
import {withRouter} from 'react-router-dom';
import {useGameState} from "../../context";

const LogIn = (props) => {
    const {isAuthorize} = useGameState();
    isAuthorize && props.history.push('/game/');

    return <div className="regForm">
        <h1>LogIn</h1>
        <WrappedLogInForm/>
    </div>
};

export default withRouter(LogIn);
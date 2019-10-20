import React from "react";
import './auth.css';
import WrappedRegistrationForm from "./WrappedRegistrationForm";
import {useGameState} from "../../context";
import {withRouter} from 'react-router-dom';

const Registration = (props) => {
    const {isAuthorize} = useGameState();
    isAuthorize && props.history.push('/game/');
    return <div>
        <div className="regForm">
            <h1>Регистрация</h1>
            <WrappedRegistrationForm/>
        </div>
    </div>
};

export default withRouter(Registration);
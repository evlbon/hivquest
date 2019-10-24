import React from "react";
import WrappedAdminLogInForm from "./WrappedAdminLogInForm";
import {withRouter} from 'react-router-dom';
import {useGameState} from "../../context";

const AdminLogIn = (props) => {
    const {isAuthorize} = useGameState();

    return <div className="regForm">
        <h1>Вход в панель администратора</h1>
        <WrappedAdminLogInForm/>
    </div>
};

export default withRouter(AdminLogIn);
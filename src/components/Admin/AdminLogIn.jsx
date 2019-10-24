import React, {useEffect} from "react";
import WrappedAdminLogInForm from "./WrappedAdminLogInForm";
import {withRouter} from 'react-router-dom';
import {useGameState} from "../../context";

const AdminLogIn = ({history}) => {
    const {admin_token} = useGameState();
    useEffect(() => {
        admin_token && history.push('/admin_login/')
    }, [admin_token]);

    return <div className="regForm">
        <h1>Вход в панель администратора</h1>
        <WrappedAdminLogInForm/>
    </div>
};

export default withRouter(AdminLogIn);
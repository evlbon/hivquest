import React, {useEffect} from "react";
import WrappedAdminLogInForm from "./WrappedAdminLogInForm";
import {withRouter} from 'react-router-dom';
import {useGameAction, useGameState} from "../../context";
import requests from "../../requests";

const AdminLogIn = ({history}) => {
    const {admin_token} = useGameState();

    useEffect(() => {
        console.log(admin_token)
        admin_token && history.push('/admin_panel/')

        requests.currentSessions(admin_token)
            .then(r => console.log(r.data))
            .catch(e => {
                if(e.response){
                    console.log(e.response)
                }
            });
    }, [admin_token]);

    return <div className="regForm">
        <h1>Вход в панель администратора</h1>
        <WrappedAdminLogInForm/>
    </div>
};

export default withRouter(AdminLogIn);

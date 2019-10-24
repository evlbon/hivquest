import React, {useEffect} from "react";
import {useGameState} from "../../context";
import {withRouter} from 'react-router-dom'
import AdminTable from "./AdminTable";

const data = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,].map(i => ({
    points: 10*i,
    time: 123,
    phone: (i%2+i%3+i%7+i+1)*i,
    email: 'zalup@mail.ru',
    address: 'omsk',
    school: 'sharaga',
    isComplete: i%2===0,
}));

const AdminPanel = ({history}) => {
    const {admin_token} = useGameState();
    useEffect(() => {
        console.log(admin_token)
        !admin_token && history.push('/admin_login/')
    }, [admin_token]);



    return <div style={{background: '#ffffff', minHeight: '100vh'}}>
        <h1>Панель администратора</h1>
        <AdminTable data={data}/>
    </div>
};

export default withRouter(AdminPanel);
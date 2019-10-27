import React, {useEffect, useState} from "react";
import {useGameState} from "../../context";
import {withRouter} from 'react-router-dom'
import AdminTable from "./AdminTable";
import requests from "../../requests";
import {Button} from "antd";

const a = {created: "2019-10-24T04:35:18.736Z",
    currentEpisode: -1,
    education: "Гапоу СКОиПТ",
    email: "Bikkusheva02@mail.ru",
    familyName: "Биккушева",
    fullAddress: "Г. Салават ",
    id: 96,
    name: "Аида ",
    patronymic: "Айдаровна",
    phone: "+79191542874",
    points: 0,
    questFinished: "1970-01-01T00:00:00.000Z",
    questStarted: "1970-01-01T00:00:00.000Z",
    ttf: 0}

const AdminPanel = ({history}) => {
    const {admin_token} = useGameState();
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        requests.getSlide(admin_token,0).then(r => {
            setStatus(true)
        }).catch(e => {
            if(e.response.status===451)
                setStatus(false);
            else
                setStatus(true)
            console.log(e.response.status)

        })
    },[status]);
    useEffect(() => {
        console.log(admin_token)
        !admin_token && history.push('/admin_login/')
        requests.currentSessions(admin_token)
            .then(r => {
                console.log(r.data)
                setData(r.data)
            })
            .catch(e => {
                if(e.response){
                    console.log(e.response)
                }
            });
        requests.finishedPlayers(admin_token)
            .then(r => {
                console.log(r.data);
                setData2(r.data);

            })
            .catch(e => {
                if(e.response){
                    console.log(e.response)
                    // setData(e.response.data)
                }
            });

    }, [admin_token]);

    const on = () => {
        requests.adminTurnOn(admin_token).then(r => setStatus(true)).catch(e => console.log(e))
    };

    const off = () => {
        requests.adminTurnOff(admin_token).then(r => setStatus(false)).catch(e => console.log(e))
    };

    return <div style={{background: '#ffffff', minHeight: '100vh'}}>
        <h1>Панель администратора</h1>
        <h2>Текущие состояние: {status?
            <span style={{color:'green'}}>Работает</span>:
            <span style={{color:'red'}}>Выключен</span>}</h2>

        <div>
            <Button style={{background:'inherit', color:'green', margin:'0 2vw'}}
                    onClick={on}
            >Включить</Button>
            <Button style={{background:'inherit', color:'red'}}
                    onClick={off}
            >Выключить</Button>
        </div>
        <h2>Текущие сессии: {data.length}</h2>
        <AdminTable data={data}/>
        <h2>Законченные сессии: {data2.length}</h2>
        <AdminTable data={data2}/>
    </div>
};

export default withRouter(AdminPanel);
import React, {useEffect, useState} from "react";
import {useGameAction, useGameState} from "../../context";
import {Button, Checkbox, Icon} from "antd";
import {Link} from "react-router-dom";
import requests from "../../requests";

const FinishGame = () => {

    const { points } = useGameState();
    const {logOut} = useGameAction();

    useEffect(()=>{
        requests.finishGame().catch(e => console.log(e.message))
    });

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div>
            <div style={{margin: '1vh 5vw', paddingLeft: '75vw'}}>
                <Button className="ant-btn" onClick={handleLogOut}>
                    <Icon style={{fontSize: '3vh'}} type="logout"/>
                </Button>
            </div>
            <div className="startPage">
                <div
                    style={{width: '60vw',  fontSize: 'xx-large', textAlign: 'center', color: '#ffe45a'}}
                >
                    <h1 style={{ color: '#ffe45a'}}><b>Конец игры</b></h1>
                    вы набрали <span style={{color:'red'}}>{points}</span> очков


                    <div style={{fontSize: 'medium', textAlign: 'center', color: '#ffe45a'}}>
                        здесь можно увидеть <Link to="/registration/s/" target="_blank">правила</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishGame
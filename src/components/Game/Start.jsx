import React, {useEffect, useState} from "react";
import {Button, Icon} from "antd";
import {useGameAction, useGameState} from "../../context";
import requests from "../../requests";
import callbacks from "../../callbacks";
import {Link} from "react-router-dom";

const StartGame = () => {

    const {token, isAuthorize, currentEpisode} = useGameState();
    const {nextSlide} = useGameAction();

    const handleStart = async () => {
        try {
            const response = await requests.startGame(token);
            callbacks.success(response.data.message);
            nextSlide(1)
        } catch (e) {
            callbacks.error(e)
        }
    };

    return (
        <div>
            <div className="startPage">
                <Button
                    style={{width: '40vw', height: '20vmin', fontSize: '5vw', margin:'0 10vw'}}
                    onClick={handleStart}
                >
                    Начать игру
                </Button>
                <div style={{fontSize: '3vw', textAlign: 'center', color: '#ffe45a'}}>
                    здесь можно увидеть <Link to="/registration/s/" target="_blank">правила</Link>
                </div>
            </div>
        </div>
    );
};

export default StartGame
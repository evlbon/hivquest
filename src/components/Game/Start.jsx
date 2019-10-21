import React, {useEffect, useState} from "react";
import {Button, Icon} from "antd";
import {useGameAction, useGameState} from "../../context";
import requests from "../../requests";
import callbacks from "../../callbacks";

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
                    style={{width: '40vw', height: '20vh', fontSize: 'xx-large'}}
                    type="primary"
                    onClick={handleStart}
                >
                    Start GAME
                </Button>
            </div>
        </div>
    );
};

export default StartGame
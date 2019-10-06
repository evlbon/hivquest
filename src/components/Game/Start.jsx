import React, {useEffect, useState} from "react";
import {Button, Icon} from "antd";
import {useGameState} from "../../context";
import requests from "../../requests";
import callbacks from "../../callbacks";

const StartGame = () => {

    const {token} = useGameState();

    const handleStart = async () => {
        try {
            const response = await requests.startGame(token);
            callbacks.success(response.data.message);
            console.log(response);
        } catch (e) {
            callbacks.error(e)
        }
    };

    return (
        <div className="startPage">
            <Button
                style={{width: '40vw', height: '20vh', fontSize: 'xx-large'}}
                type="primary"
                onClick={handleStart}
            >
                Start GAME
            </Button>
        </div>
    );
};

export default StartGame
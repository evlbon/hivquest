import React, {useEffect, useState} from "react";
import Demo from "../Demo";
import {withRouter} from 'react-router-dom';
import {useGameAction, useGameState} from "../../context";
import {Button, Icon} from "antd";
import StartGame from './Start';

const Game = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    const {logOut} = useGameAction();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleLogOut = () => {
        logOut();
    };



    const {isAuthorize, currentEpisode} = useGameState();
    !isAuthorize && props.history.push('/login/');

    console.log(useGameState());

    if(currentEpisode === '0')
        return <StartGame/>

    return <div>
        <div style={{margin: '1vh 5vw', paddingLeft: '85vw'}}>
            <Button className="ant-btn" onClick={handleLogOut}>
                <Icon style={{fontSize: '3vh'}} type="logout"/>
            </Button>
        </div>
        <Demo isMobile={isMobile}/>
        <br/>
    </div>
};


export default withRouter(Game);
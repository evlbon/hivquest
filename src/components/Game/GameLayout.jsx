import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import {useGameAction, useGameState} from "../../context";
import {Button, Icon} from "antd";
import StartGame from './Start';
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

const GameLayout = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    const {logOut} = useGameAction();
    const {isAuthorize, currentEpisode, token} = useGameState();

    useEffect(() => {
        !isAuthorize && props.history.push('/login/');
        const handleResize = () => setIsMobile(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleLogOut = () => {
        logOut();
    };

    if(currentEpisode === 0)
        return <StartGame />;

    return <div>
        <div style={{margin: '1vh 5vw', paddingLeft: '85vw'}}>
            <Button className="ant-btn" onClick={handleLogOut}>
                <Icon style={{fontSize: '3vh'}} type="logout"/>
            </Button>
        </div>
        {isMobile? <Mobile/>:<Desktop/>}
        <br/>
    </div>
};


export default withRouter(GameLayout);
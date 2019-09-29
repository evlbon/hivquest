import React, {useEffect, useState} from "react";
import Demo from "../Demo";
import {withRouter} from 'react-router-dom';
import {useGameAction, useGameState} from "../../context";
import {Icon} from "antd";

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



    const {isAuthorize} = useGameState();
    !isAuthorize && props.history.push('/login/');

    return <div>
        <div style={{height: '5vh', margin: '0 5vw'}}>
            <div style={{float: 'right',height: '5vh'}} onClick={handleLogOut}>
                <Icon type="logout" />
            </div>
        </div>
        <Demo isMobile={isMobile}/>
        <br/>
    </div>
};


export default withRouter(Game);
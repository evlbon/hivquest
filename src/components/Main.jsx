import {Button} from "antd";
import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {useGameState} from "../context";
const Main = ({history}) => {
    const {isAuthorize} = useGameState();

    useEffect(()=>{
        if(isAuthorize)
            history.push('/game/');
        else
            history.push('/login/');
    });

    return(<div/>)
};

export default withRouter(Main)
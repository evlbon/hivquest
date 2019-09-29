import React, {useEffect, useState} from "react";
import Demo from "../Demo";
import {withRouter} from 'react-router-dom';
import {useGameState} from "../../context";

const Game = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const {isAuthorize} = useGameState();
    !isAuthorize && props.history.push('/login/');

    return <div>
        {/*{isMobile && "MOBILE"}*/}
        <Demo isMobile={isMobile}/>
        <br/>
    </div>
};


export default withRouter(Game);
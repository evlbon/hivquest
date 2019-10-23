import React, {useEffect, useState} from "react";
import Game from "../Game";
import './Balloon.css';
import './Desktop.css';
import {Button, Col, Row} from "antd";
import Slide from "../Slide";
import {useGameState} from "../../../context";

const DesktopView = ({slides, img, text, onClick}) => {
    const [id, setId] = useState(0);
    const {currentEpisode, points} = useGameState();

    useEffect(() => {
        setId((currentEpisode - 1) % 3);
    }, [currentEpisode]);

    return <div>
        <div style={{padding: `10px 3vw`, marginBottom: '1vh', overflow:'hidden'}}>
            <Row gutter={16}>
                {slides && slides.map((s, sid) => (
                    <Col key={sid} sm={{span: 8}}>
                        <div style={sid === id ? {
                            boxShadow: '0 0 10px 0 #ffe45a',
                            width: '30vw',
                            height: '53vw',
                            maxHeight: '80vh',
                            maxWidth: '45vh',
                            overflow: 'hidden'
                        } : {}}>
                            <Slide img={img(sid)} style={"d"} order={sid}
                                   speech={text(sid)} authorText={s && s.authorText}/>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
        <div style={{marginRight: 50, float: "right"}}>
            <Button onClick={onClick} size={'large'}>Next</Button>
        </div>
        <div style={{marginLeft: 30, fontSize: 'large', color:'#ffe45a'}}>Очков: {points}</div>

    </div>
};

const Desktop = () => {
    return <Game
        isMobile={false}
        child={DesktopView}
    />
};

export default Desktop;
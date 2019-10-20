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
        <div style={{padding: `0 3vw`, marginBottom: '1vh'}}>
            <Row gutter={16}>
                {slides && slides.map((s, sid) => (
                    <Col key={sid} sm={{span: 8}}>
                        <div style={sid === id ? {
                            boxShadow: '0 0 5px 0 #000000',
                            width: '30vw',
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
            <Button style={{background: '#21248f'}} onClick={onClick} size={'large'}>Next</Button>
        </div>
        <div style={{marginLeft: 10, fontSize: 'large'}}>{points} pints</div>

    </div>
};

const Desktop = () => {
    return <Game
        isMobile={false}
        child={DesktopView}
    />
};

export default Desktop;
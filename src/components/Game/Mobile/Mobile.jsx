import React, {useEffect, useRef, useState} from "react";
import Game from "../Game";
import {Affix, Button, Col, Icon, Row} from "antd";
import Slide from "../Slide";
import './Mobile.css'
import {useGameState} from "../../../context";
import { Anchor } from 'antd';

const { Link } = Anchor;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const MobileView = ({slides, img, text,onClick,reset}) => {
    const {currentEpisode, points} = useGameState();
    const ref = [useRef(null),useRef(null),useRef(null)];


    const executeScroll = (i) => scrollToRef(ref[i]);

    useEffect(()=>{
        const i = (currentEpisode-1) % 3;
        if(ref&&ref[i]&&ref[i].current)
            executeScroll(i);
    },[currentEpisode]);

    return <div >
            {slides && slides.map((s, sid) => (
                    <div ref={ref[sid]} key={sid} style={{height: '100vh'}}>
                        <Slide img={img(sid)} style={"m"} order={sid}
                               speech={text(sid)} authorText={s && s.authorText}/>
                    </div>
            ))}


        <div className="mNext">
            <Affix offsetBottom={20}>
                <Button
                    type="primary"
                    size={'large'}
                    onClick={onClick}
                >
                    Next<Icon type="right" />
                </Button>
            </Affix>
        </div>
    </div>
};

const Mobile = () => {
    return <Game
        child = {MobileView}
    />
};

export default Mobile;
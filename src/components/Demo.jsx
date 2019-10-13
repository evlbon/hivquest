import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";
import MyGrid from "./MyGrid";
import requests from "../requests";
import {useGameAction, useGameState} from "../context";
import Slide from "./Game/Slide";

const colors = ['url(/1.jpg)', 'url(/2.jpg)', 'url(/3.jpg)', 'url(/4.jpg)'];

function randomColor() {
    let rand = Math.random() * 3;
    return colors[Math.round(rand)];
}


const Demo = ({isMobile}) => {
    const [slides, setSlides] = useState();
    const {nextSlide} = useGameAction();
    const {currentEpisode, token} = useGameState();

    useEffect(() => {
        !slides&&getSlide();
    });

    const getSlide = async () => {
        try {
            const r = await requests.getSlide(token, currentEpisode);
            if(r.length === 3)
                setSlides(r.data);
            else
                setSlides([undefined, undefined, undefined]);
        } catch (e) {
            setSlides([undefined, undefined, undefined]);
            console.log("ERROR TRYING GET SLIDE")

        }
        console.log(slides)
    };

    const onClick = async () => {
        nextSlide(currentEpisode+1);
        await getSlide();
    };

    const getImage = (id) => {
        if(slides && slides[id])
            return `url(http://78.46.183.3:80/${slides[id].imageLink})`;
        else
            return 'url(/noslide.jpg)'

    };


    const style = isMobile?'Mobile':'Desktop';
    const number = 3
    return (<div style={{marginBottom: '10vh'}}>
            <div style={{padding: `0 ${3+15*(3-number)}vw`}}>
                <Row gutter={16}>
                    {slides&&slides.map((s,sid)=>(
                        <Col key={sid} sm={{span: 24/number}}>
                            <Slide img={getImage(sid)} style={style} order={sid} speech={[[1,1,`Hello from ${sid}`]]}/>
                        </Col>
                    ))}
                </Row>
            </div>
            <div style={{marginRight: 50, float: "right"}}><Button onClick={onClick}>Next</Button></div>
        </div>
    );

};

export default Demo
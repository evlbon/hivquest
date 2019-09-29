import React, {useState} from "react";
import {Button, Col, Row} from "antd";

const colors = ['url(/1.jpg)', 'url(/2.jpg)', 'url(/3.jpg)', 'url(/4.jpg)'];

function randomColor() {
    let rand = Math.random() * 3;
    console.log(Math.round(rand));
    return colors[Math.round(rand)];
}


const Demo = ({isMobile}) => {
    const [colors, setColors] = useState({
        c1: randomColor(),
        c2: randomColor(),
        c3: randomColor(),
    });

    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setColors({
            c1: randomColor(),
            c2: randomColor(),
            c3: randomColor(),
        })

    };
    const style = isMobile?'Mobile':'Desktop';
    return (<div style={{marginBottom: '10vh'}}>
            <div className={style}>
                <Row gutter={16}>
                    <Col sm={{span: 8}}>
                        <div style={{backgroundImage: colors.c1}} className={`anim-show s${style}`}/>
                    </Col>
                    <Col sm={{span: 8}}>
                        <div style={{backgroundImage: colors.c2}} className={`anim-show s${style}`}/>
                    </Col>
                    <Col sm={{span: 8}}>
                        <div style={{backgroundImage: colors.c3}} className={`anim-show s${style}`}/>
                    </Col>
                </Row>
            </div>
            <div style={{marginRight: 50, float: "right"}}><Button onClick={onClick}>Next</Button></div>
        </div>
    );

};

export default Demo
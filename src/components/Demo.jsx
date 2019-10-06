import React, {useState} from "react";
import {Button, Col, Row} from "antd";
import MyGrid from "./MyGrid";

const colors = ['url(/1.jpg)', 'url(/2.jpg)', 'url(/3.jpg)', 'url(/4.jpg)'];

function randomColor() {
    let rand = Math.random() * 3;
    return colors[Math.round(rand)];
}


const Demo = ({isMobile}) => {
    const [colors, setColors] = useState({
        c1: randomColor(),
        c2: randomColor(),
        c3: randomColor(),
    });

    const onClick = () => {
        // isMobile&&window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });

        setColors({
            c1: randomColor(),
            c2: randomColor(),
            c3: randomColor(),
        })

    };
    const style = isMobile?'Mobile':'Desktop';
    console.log("HI");
    const number = 3
    return (<div style={{marginBottom: '10vh'}}>
            <div style={{padding: `0 ${3+15*(3-number)}vw`}}>
                <Row gutter={16}>
                    <Col sm={{span: 24/number}}>
                        <div style={{backgroundImage: colors.c1}} className={`anim-show s${style}`}>
                            <MyGrid set={[]}/>
                        </div>
                    </Col>

                    <Col sm={{span: 24/number}}>
                        <div style={{backgroundImage: colors.c2}} className={`anim-show s${style}`}>
                            <MyGrid set={[[1,1,<div className={'left-bubble'}>HI</div>]]}/>
                        </div>
                    </Col>
                    <Col sm={{span: 24/number}}>
                        <div style={{backgroundImage: colors.c3}} className={`anim-show s${style}`}>
                            <MyGrid set={[]}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{marginRight: 50, float: "right"}}><Button onClick={onClick}>Next</Button></div>
        </div>
    );

};

export default Demo
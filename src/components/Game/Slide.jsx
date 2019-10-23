import React, {useEffect, useState} from "react";
import MyGrid from "./MyGrid";
import Balloon from "./Balloon";

const Slide = ({img, style, order, speech, authorText}) => {
    const [set, setSet] = useState(speech);
    useEffect(() => {
        setSet(speech)
    }, [speech]);

    const getBalloons = () => {
        return speech.map((b, bid) => {
            const animationDelay = style === 'd'?{
                animationDelay:`${3*order+5/speech.length*bid}s`,
            }:{
                animationDelay:`${3*order+5/speech.length*bid}s`,

            };

            const padTop = style === 'd'?{
                paddingBottom: `${b[2].length>200?2*b[2].length/200:2}vw`

            }:{
                paddingTop: `${b[2].length>200?4*b[2].length/200:3}vmax`,
                paddingBottom: `${b[2].length>200?8*b[2].length/200:3}vmax`

            };

            const padBot = style === 'd'?{
                paddingTop: `${b[2].length>200?2.3*b[2].length/200:2}vw`

            }:{
                paddingBottom: `${b[2].length>200?4*b[2].length/200:3}vmax`,
                paddingTop: `${b[2].length>200?8*b[2].length/200:5}vmax`

            };

            return [b[0], b[1], b[3] ?
                b[4] ?
                    <Balloon.Right.Top text={b[2]} slide={order} order={bid} style={style} animationDelay={{...animationDelay,...padBot}}/> :
                    <Balloon.Right text={b[2]} slide={order} order={bid} style={style} animationDelay={{...animationDelay,...padTop}}/> :
                b[4] ?
                    <Balloon.Left.Top text={b[2]} slide={order} order={bid} style={style} animationDelay={{...animationDelay,...padBot}}/>
                    :
                    <Balloon.Left text={b[2]} slide={order} order={bid} style={style} animationDelay={{...animationDelay,...padTop}}/>]
        })
    };


    const authorTextSize = authorText && (authorText.length <= 140 ? 'AuthorTextB' :
        authorText.length <= 240 ? 'AuthorTextM' : authorText.length <= 290 ? 'AuthorTextS' : 'AuthorTextXS');

    return (
        <div style={{backgroundImage: img}} className={`anim-show ${style}Slide`}>
            <MyGrid style={style} set={getBalloons().concat([[13, 0,
                <div className={`${style}${authorTextSize}`} style={{color: 'yellow', background:'rgba(26, 52, 126, 0.85)', textAlign:'center'}}>{authorText}</div>]])}/>
        </div>
    )
};

export default Slide
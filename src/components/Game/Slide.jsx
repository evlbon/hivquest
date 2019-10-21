import React, {useEffect, useState} from "react";
import MyGrid from "./MyGrid";
import Balloon from "./Balloon";

const Slide = ({img, style, order, speech, authorText}) => {
    const [set, setSet] = useState(speech);
    useEffect(() => {
        setSet(speech)
    }, [speech]);

    const getBalloons = () => {
        // const o = {};
        // speech.forEach((b, bid) => {
        //     order[`${b[0]}${b[1]}`] = bid;
        // });
        //

        return speech.map((b, bid) => {
            const animationDelay = `${6*order+6/speech.length*bid}s`;

            return [b[0], b[1], b[3] ?
                b[4] ?
                    <Balloon.Right.Top text={b[2]} slide={order} order={bid} style={style} animationDelay={animationDelay}/> :
                    <Balloon.Right text={b[2]} slide={order} order={bid} style={style} animationDelay={animationDelay}/> :
                b[4] ?
                    <Balloon.Left.Top text={b[2]} slide={order} order={bid} style={style} animationDelay={animationDelay}/>
                    :
                    <Balloon.Left text={b[2]} slide={order} order={bid} style={style} animationDelay={animationDelay}/>]
        })
    };


    const authorTextSize = authorText && (authorText.length <= 140 ? 'AuthorTextB' :
        authorText.length <= 240 ? 'AuthorTextM' : authorText.length <= 450 ? 'AuthorTextS' : 'AuthorTextXS');

    return (
        <div style={{backgroundImage: img}} className={`anim-show ${style}Slide`}>
            <MyGrid style={style} set={getBalloons().concat([[13, 0,
                <div className={`${style}${authorTextSize}`} style={{color: 'yellow', background:'rgba(26, 52, 126, 0.85)', textAlign:'center'}}>{authorText}</div>]])}/>
        </div>
    )
};

export default Slide
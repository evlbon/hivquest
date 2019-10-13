import React from "react";
import MyGrid from "../MyGrid";
import Balloon from "./Balloon";

const Slide = ({img, style, order, speech}) => {
    const set = speech.map(b => [b[0],b[1],<Balloon text = {b[2]}/>]);
    return(
        <div style={{backgroundImage: img}} className={`anim-show s${style}`}>
            <MyGrid set={set}/>
        </div>
    )
};

export default Slide
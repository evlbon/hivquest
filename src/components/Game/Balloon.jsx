import React from "react";

const Balloon = ({text, slide, order, style}) => {

    return(
        <div className="bubble anim-show" style={{animationDelay:`${2*slide+0.4*order}s`}}>
            {text}
        </div>
    )
};

Balloon.Right = ({text, slide, order, style}) => {

    return(
        <div className={`${style}Right-bubble anim-show`} style={{animationDelay:`${2*slide+0.4*order}s`}}>
            {text}
        </div>
    )
};

Balloon.Left = ({text, slide, order, style}) => {

    return(
        <div className={`${style}Left-bubble anim-show`} style={{animationDelay:`${2*slide+0.4*order}s`}}>
            {text}
        </div>
    )
};

Balloon.Right.Top = ({text, slide, order, style}) => {

    return(
        <div className={`${style}Right-bubble-top anim-show`} style={{animationDelay:`${2*slide+0.4*order}s`}}>
            {text}
        </div>
    )
};

Balloon.Left.Top = ({text, slide, order, style}) => {

    return(
        <div className={`${style}Left-bubble-top anim-show`} style={{animationDelay:`${2*slide+0.4*order}s`}}>
            {text}
        </div>
    )
};
export default Balloon;
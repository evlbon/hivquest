import React from "react";

const Balloon = ({text, slide, order, style}) => {

    return(
        <div className="bubble anim-show" style={{animationDelay:`${10*slide+2*order}s`}}>
            {text}
        </div>
    )
};

Balloon.Right = ({text, style, animationDelay}) => {

    return(
        <div className={`${style}Right-bubble anim-show`} style={animationDelay}>
            {text}
        </div>
    )
};

Balloon.Left = ({text, style, animationDelay}) => {

    return(
        <div className={`${style}Left-bubble anim-show`} style={animationDelay}>
            {text}
        </div>
    )
};

Balloon.Right.Top = ({text, style, animationDelay}) => {

    return(
        <div className={`${style}Right-bubble-top anim-show`} style={animationDelay}>
            {text}
        </div>
    )
};

Balloon.Left.Top = ({text, style, animationDelay}) => {

    return(
        <div className={`${style}Left-bubble-top anim-show`} style={animationDelay}>
            {text}
        </div>
    )
};
export default Balloon;
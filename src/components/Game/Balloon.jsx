import React from "react";
import './Balloon.css';

const Balloon = ({text}) => {

    return(
        <div className="left-bubble">
            {text}
        </div>
    )
};

export default Balloon;
import React from "react";
import SingleChoice from "./SingleChoice";
import MultipleChoice from "./MultipleChoice";
import FreeAnswer from "./FreeAnswer";
import DragAndDrop from "./DragAndDrop";

const Interaction = ({interaction}) => {
    const type = interaction.type;
    console.log(type)

    switch (type) {
        case('SINGLE_CHOICE'):
            return <SingleChoice interaction={interaction}/>;
        case('MULTIPLE_CHOICE'):
            return <MultipleChoice interaction={interaction}/>;
        case('FREE_ANSWER'):
            return <FreeAnswer interaction={interaction}/>;
        case("DRAG_DROP"):
            return <DragAndDrop interaction={interaction}/>;
        default:
            return <div/>;

    }
};

export default Interaction;
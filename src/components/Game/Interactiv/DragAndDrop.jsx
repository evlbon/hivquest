import {Modal, Button} from 'antd';
import React, {useState} from "react";
import {Radio, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import DNDComponent from "./DNDComponent";
import requests from "../../../requests";

const DragAndDrop = ({interaction}) => {

    const {nextSlide, responseInteraction} = useGameAction();
    const {currentEpisode, token} = useGameState();

    const [state, setState] = useState({
        ans1: [],
        ans2: [],
        all: [],
    });

    const handleOk = () => {
        if (state.all.length === 0) {
            const value = {
                interactionId: interaction.id,
                dragDropAnswers: {
                    'negative': state.ans1.map(a => a.id),
                    'positive': state.ans2.map(a => a.id)}

            };
            responseInteraction(token, value);
            nextSlide(currentEpisode + 1);
        }

    };


    return (
        <div>
            <Modal
                title={interaction.title}
                visible={true}
                width={'80vw'}
                closable={false}
                footer={<Button onClick={handleOk}>Ok</Button>}
            >
                <div>
                    <DNDComponent columns={interaction.columns} data={interaction.data} setState={setState}/>
                </div>

            </Modal>
        </div>
    );
};

export default DragAndDrop
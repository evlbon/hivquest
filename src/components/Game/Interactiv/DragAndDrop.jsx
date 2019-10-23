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

    const [description, setDescription] = useState();

    const [state, setState] = useState({
        ans1: [],
        ans2: [],
        all: [],
    });

    const handleOk = () => {
        if (state.all.length === 0) {
            if (description) {
                nextSlide(currentEpisode + 1);
            } else {
                const value = {
                    interactionId: interaction.id,
                    dragDropAnswers: {
                        'negative': state.ans1.map(a => a.id),
                        'positive': state.ans2.map(a => a.id)
                    }

                };

                responseInteraction(token, value);
                if(!interaction.interactionDefinition)
                    nextSlide(currentEpisode + 1);
                else
                    setDescription(JSON.parse(interaction.interactionDefinition))
            }
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
                    {description ? Object.keys(description).map((q, qid) => {
                            if (!description[q].name)
                                return <div key={qid}>{description[q]}</div>;

                            return <div key={qid}>
                                <div><b>{description[q].name}</b></div>
                                {description[q].data.map((d, did) => <div key={did}>
                                    {d}
                                </div>)}
                            </div>
                        }
                    ) :
                        <DNDComponent columns={interaction.columns} data={interaction.data} setState={setState}/>
                    }

                </div>

            </Modal>
        </div>
    );
};

export default DragAndDrop
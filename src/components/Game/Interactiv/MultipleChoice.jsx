import {Modal, Button} from 'antd';
import React, {useEffect, useState} from "react";
import {Checkbox, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";
import requests from "../../../requests";

const MultipleChoice = ({interaction}) => {

    const {nextSlide, responseInteraction} = useGameAction();
    const {currentEpisode, token} = useGameState();
    const [description, setDescription] = useState();
    const [ans, setAns] = useState([]);

    const handleOk = () => {
        if (ans.length) {

            if (description) {
                nextSlide(currentEpisode + 1);
            } else {
                const value = {
                    interactionId: interaction.id,
                    answers: getAns(),
                };

                responseInteraction(token, value);
                if(!interaction.interactionDefinition)
                    nextSlide(currentEpisode + 1);
                else
                    setDescription(JSON.parse(interaction.interactionDefinition))
            }
        }
    };

    const getAns = () => ans.map((a) => {

        return {id:interaction.data[a-1].id, answer:interaction.data[a-1].text}
    });


    return (
        <div>
            <Modal
                title={interaction.title}
                visible={true}
                closable={false}
                footer={<Button onClick={handleOk}>Ok</Button>}
            >
                <div>
                    {
                        description ? Object.keys(description).map((q, qid) => {
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
                        <div>
                            <div>{interaction.title}</div>
                            <Checkbox.Group onChange={setAns} value={ans}>
                                {interaction.data.map(a => <li key={a.id}>
                                    <Checkbox value={a.id}>
                                        {a.text}
                                    </Checkbox>
                                </li>)}
                            </Checkbox.Group>
                        </div>

                    }

                </div>
            </Modal>
        </div>
    );
};
export default MultipleChoice
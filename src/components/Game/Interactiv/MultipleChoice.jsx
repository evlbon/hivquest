import { Modal, Button } from 'antd';
import React, {useState} from "react";
import { Checkbox, Input } from 'antd';
import {useGameAction, useGameState} from "../../../context";
import requests from "../../../requests";

const MultipleChoice = ({interaction}) => {

    const {nextSlide, responseInteraction} = useGameAction();
    const {currentEpisode, token} = useGameState();
    const [ans, setAns] = useState([]);

    const handleOk = () => {
        if(ans.length){
            const value = {
                interactionId: interaction.id,
                answers: getAns(),
            };
            responseInteraction(token, value);
            nextSlide(currentEpisode+1);
            console.log(ans,interaction)
        }
    };

    const getAns = () => {
        ans.map((a) => interaction.data[a])
    };


    return (
        <div>
            <Modal
                title={interaction.title}
                visible={true}
                closable={false}
                footer={<Button onClick={handleOk}>Ok</Button>}
            >
                <div>
                    <div>{interaction.title}</div>
                    <Checkbox.Group  onChange={setAns} value={ans}>
                        {interaction.data.map(a => <li key={a.id} >
                            <Checkbox value={a.id}>
                                {a.text}
                            </Checkbox>
                        </li>)}
                    </Checkbox.Group>
                </div>
            </Modal>
        </div>
    );
};
export default MultipleChoice
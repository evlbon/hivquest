import {Modal, Button} from 'antd';
import React, {useState} from "react";
import {Radio, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";
import requests from "../../../requests";
const { TextArea } = Input;
const FreeAnswer = ({interaction}) => {

    const {nextSlide, responseInteraction} = useGameAction();
    const {currentEpisode, token} = useGameState();
    const [ans, setAns] = useState('');

    const handleOk = () => {
        if (ans !== '') {
            const value = {
                interactionId: interaction.id,
                freeAnswer: ans,
            };
            responseInteraction(token, value);
            nextSlide(currentEpisode + 1);
        }

    };
    const onChange = e => {
        setAns(e.target.value);
    }

    return (
        <div>
            <Modal
                title={interaction.title}
                visible={true}
                closable={false}
                footer={<Button onClick={handleOk}>Ok</Button>}
            >
                <TextArea rows={5} value={ans} onChange={onChange}/>
            </Modal>
        </div>
    );
};
export default FreeAnswer
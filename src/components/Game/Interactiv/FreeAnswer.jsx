import {Modal, Button} from 'antd';
import React, {useState} from "react";
import {Radio, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";

const FreeAnswer = ({interaction}) => {

    const {nextSlide} = useGameAction();
    const {currentEpisode} = useGameState();
    const [visible, setVisible] = useState(true);
    const [ans, setAns] = useState('');

    const handleOk = () => {
        if (ans !== '') {
            nextSlide(currentEpisode+1);
            console.log(ans)
            console.log(interaction)
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
                <Input value={ans} onChange={onChange}/>
            </Modal>
        </div>
    );
};
export default FreeAnswer
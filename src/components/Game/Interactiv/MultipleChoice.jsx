import { Modal, Button } from 'antd';
import React, {useState} from "react";
import { Checkbox, Input } from 'antd';
import {useGameAction, useGameState} from "../../../context";

const MultipleChoice = ({interaction}) => {

    const {nextSlide} = useGameAction();
    const {currentEpisode} = useGameState();
    const [ans, setAns] = useState([]);

    const handleOk = () => {
        if(ans.length){
            nextSlide(currentEpisode+1);
            console.log(ans)
        }

    };

    console.log(ans);
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const choose = (v,id) => {
        const a = [...ans];
        a[id] = v;
        setAns(a);
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
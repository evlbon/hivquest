import {Modal, Button} from 'antd';
import React, {useState} from "react";
import {Radio, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";
import requests from "../../../requests";

const SingleChoice = ({interaction}) => {

    const {nextSlide, responseInteraction} = useGameAction();
    const {currentEpisode,token} = useGameState();
    const [description, setDescription] = useState();
    const [ans, setAns] = useState(interaction.data.map(() => 0));

    const handleOk = () => {
        if (ans.indexOf(0) === -1) {
            if (description) {
                nextSlide(currentEpisode + 1);
            } else {
                const answers = getAns();

                const value = {
                    interactionId: interaction.id,
                    answers: answers,
                };
                responseInteraction(token, value);
                setDescription(JSON.parse(interaction.interactionDefinition))
            }
        }
    };

    const getAns = () => {
        const answers = ans.map((a,aid) => {
            let text = '';
            interaction.data[aid].answers.map(i => {if(i.first===a) text=i.second});
            return {id:a,answer:text}
        });
        return answers;
    };


    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const choose = (v, id) => {
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
                <div style = {{maxHeight:'80vh', overflow: 'scroll'}}>
                    {
                        description ? Object.keys(description).map((q, qid) => {
                            if(!description[q].name)
                                return <div key={qid}>{description[q]}</div>;

                            return<div key={qid}>
                                <div><b>{description[q].name}</b></div>
                                {description[q].data.map((d,did) => <div key={did}>
                                    {d}
                                </div>)}
                            </div>
                            }
                            ) :
                            interaction.data.map((q, qid) => (
                                    <div key={qid}>
                                        <div><b>{q.title}</b></div>
                                        <Radio.Group onChange={(e) => {
                                            choose(e.target.value, qid)
                                        }} value={ans[qid]}>
                                            {q.answers.map(a => <Radio key={a.first} style={radioStyle} value={a.first}>
                                                {a.second}
                                            </Radio>)}
                                        </Radio.Group>
                                    </div>
                                )
                            )
                    }
                </div>
            </Modal>
        </div>
    );
};
export default SingleChoice
import {Modal, Button} from 'antd';
import React, {useState} from "react";
import {Radio, Input} from 'antd';
import {useGameAction, useGameState} from "../../../context";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DNDComponent from "./DNDComponent";

const DragAndDrop = ({interaction}) => {

    const {nextSlide} = useGameAction();
    const {currentEpisode} = useGameState();

    const [state, setState] = useState({
        ans1: [],
        ans2: [],
        all: [],
    });

    const id2List = {
        droppable1: 'ans1',
        droppable2: 'ans2',
        droppable3: 'all'
    };

    const getList = id => state[id2List[id]];

    const handleOk = () => {
        // if (ans !== '') {
        //     // nextSlide(currentEpisode+1);
        //     console.log(ans)
        // }
        if(state.all.length===0){
            nextSlide(currentEpisode+1);
            console.log(state)
        }

    };

    // const onDragEnd = result => {
    //     const { source, destination } = result;
    //
    //     // dropped outside the list
    //     if (!destination) {
    {/*        return;*/}
    //     }
    //
    //     if (source.droppableId === destination.droppableId) {
    //         const items = reorder(
    //             this.getList(source.droppableId),
    //             source.index,
    {/*            destination.index*/}
    {/*        );*/}

    //         let state = { items };
    //
    {/*        if (source.droppableId === 'droppable2') {*/}
    //             state = { selected: items };
    //         }
    //
    {/*        this.setState(state);*/}
    {/*    } else {*/}
    {/*        const result = move(*/}
    {/*            this.getList(source.droppableId),*/}
    {/*            this.getList(destination.droppableId),*/}
    {/*            source,*/}
    {/*            destination*/}
    //         );
    //
    //         this.setState({
    //             items: result.droppable,
    //             selected: result.droppable2
    //         });
    //     }
    // };



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
                    <DNDComponent columns = {interaction.columns} data = {interaction.data} setState={setState}/>
                </div>



                    {/*<Droppable droppableId="droppable2">*/}
                    {/*    {(provided, snapshot) => (*/}
                    {/*        <div*/}
                    {/*            ref={provided.innerRef}*/}
                    {/*            style={getListStyle(snapshot.isDraggingOver)}>*/}
                    {/*            {state.selected.map((item, index) => (*/}
                    {/*                <Draggable*/}
                    {/*                    key={item.id}*/}
                    {/*                    draggableId={item.id}*/}
                    {/*                    index={index}>*/}
                    {/*                    {(provided, snapshot) => (*/}
                    {/*                        <div*/}
                    {/*                            ref={provided.innerRef}*/}
                    {/*                            {...provided.draggableProps}*/}
                    {/*                            {...provided.dragHandleProps}*/}
                    {/*                            style={getItemStyle(*/}
                    {/*                                snapshot.isDragging,*/}
                    {/*                                provided.draggableProps.style*/}
                    {/*                            )}>*/}
                    {/*                            {item.content}*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                </Draggable>*/}
                    {/*            ))}*/}
                    {/*            {provided.placeholder}*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</Droppable>*/}
                {/*</DragDropContext>*/}

            </Modal>
        </div>
    );
};

export default DragAndDrop
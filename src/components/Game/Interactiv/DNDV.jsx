import React from "react";
import {Droppable, Draggable} from 'react-beautiful-dnd';

const grid = 8;


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    border: '1px solid rgba(159, 159, 159, 0.67)',
    background: 'white',
    zIndex: 100,

    // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle

});

const getListStyle = isDraggingOver => ({
    background: 'rgba(3, 3, 3, 0.05)',
    textAlign: 'center',
    padding: grid,
    width: '30vw',
    height: '60vh',
    overflow: 'scroll',
    boxShadow: isDraggingOver? '0 0 10px 0 rgba(0,0,0,0.76)':'',
});

const DNDV = ({items, droppableId}) => {
    return <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
            >
                {items.map((item, index) => (
                    <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={
                                    {
                                        ...getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style),
                                    }
                                }>
                                {item.content}
                            </div>
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
        )}
    </Droppable>
};

export default DNDV


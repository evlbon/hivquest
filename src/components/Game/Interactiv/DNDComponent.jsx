import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import DNDH from "./DNDH";
import DNDV from "./DNDV";

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({length: count}, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


class DNDComponent extends Component {
    state = {
        items: [],
        selected: [],
        selected2: [],
    };

    componentDidMount() {
        this.setState({
            selected2: this.props.data.map(d => ({id:d.id, content:d.text}))
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState!=this.state){
            this.callback()
        }

    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        droppable3: 'selected2',
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = {items};

            if (source.droppableId === 'droppable2') {
                state = {selected: items};
            }

            if (source.droppableId === 'droppable3') {
                state = {selected2: items};
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            if(result.droppable)
                this.setState({
                    items: result.droppable,
                });
            if(result.droppable2)
                this.setState({
                    selected: result.droppable2,
                });
            if(result.droppable3)
                this.setState({
                    selected2: result.droppable3,
                });
        }
        this.callback()

    };

    callback = () => {
        this.props.setState({
            ans1:this.state.items,
            ans2:this.state.selected,
            all:this.state.selected2,});
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{height: '60vh', width:'100%'}}>
                    <div style={{float:'left', height: '60vh'}}>
                        {this.props.columns[0].name}
                        <DNDV items={this.state.items} droppableId={'droppable'}/>
                    </div>
                    <div style={{float:'right',height: '60vh' }}>
                        {this.props.columns[1].name}
                        <DNDV items={this.state.selected} droppableId={'droppable2'}/>
                    </div>
                </div>
                <br/>
                <div style={{ margin: '10px 0 0 0'}}>
                    <DNDH items={this.state.selected2} droppableId={'droppable3'}/>
                </div>

            </DragDropContext>
        );
    }
}

export default DNDComponent;
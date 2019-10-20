import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";

const w = 9, h = 16;
const bgImage = 'https://i.pinimg.com/originals/67/0f/49/670f499bf6c1a9d84c12d8ecfd38bd2e.jpg';


const makeGrid = () => {
    const grid = [];
    for (let i = 1; i <= h; i++) {
        const row = [];
        for (let j = 1; j <= w; j++) {
            row.push(undefined)
                // `${i-1},${j-1}`
        }
        grid.push(row)
    }
    return grid
};


const MyGrid = ({set,style}) => {
    const [grid, setGrid] = useState(makeGrid());
    useEffect(() => {
        const g = makeGrid();
        if (set)
            set.forEach(e => {
                const [y, x, content] = e;
                g[y][x] = content;
            });
        setGrid(g);
    },[set]);
    return (<div>
        {grid.map((r,rid) => <div key={rid}>
            {r.map((c,cid) => <div key={`${rid}${cid}`} className={`${style}Cell`}>{c&&c}</div>)} </div>)}
    </div>)

    // return (<div className='grid'>
    //     {grid.map(r => <div style={{height: `${53 / h}vw`}}>
    //         {r.map(c => <div style={{height: `${53 / h}vw`, width: `${30 / w}vw`,}} className="cell">{c&&c}</div>)} </div>)}
    // </div>)
};

export default MyGrid
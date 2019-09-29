import React from 'react';
import './App.css';
import Main from "./components/Main";
import MyGrid from "./components/MyGrid";

import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './router';
import Demo from "./components/Demo";
import {GameContextProvider} from "./context";

const c = <div style={{background: "red", height: '100%'}}>X</div>;
const set = [[4, 4, c]];

const App = () => (
    <div>
        <Router>
            <GameContextProvider>
                <BaseRouter/>
            </GameContextProvider>
        </Router>

    </div>
);

// const App = () => (<div>
//     <MyGrid set={set}/>
// </div>);

export default App;

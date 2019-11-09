import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {GameContextProvider} from "./context";
import App from "./App";
import './index.css';
import End from "./components/End";
// import App from "./App";

const Cover = () => (
    <Router>
        <GameContextProvider>
            <App/>
        </GameContextProvider>
    </Router>
);

ReactDOM.render(<End/>, document.getElementById('root'));
// ReactDOM.render(<Cover/>, document.getElementById('root'));

// If you want your app to w    ork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

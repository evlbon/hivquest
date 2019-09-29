import React from "react";
import { Route } from 'react-router-dom';
import Demo from "./components/Demo";
import Registration from "./components/Authorization/Registartion";
import LogIn from "./components/Authorization/LogIn";
import Game from "./components/Game/Game";

const Main = () => {
    return <div>HELLO</div>
};
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/registration/' component={Registration} />
        <Route exact path='/login/' component={LogIn} />
        <Route exact path='/game/' component={Game} />
        <Route exact path='/demo/' component={Demo} />
    </div>
);

export default BaseRouter;
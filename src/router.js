import React from "react";
import { Route } from 'react-router-dom';
import Game from "./components/Game/Game";
import Registration from "./components/Authorization/Registartion";
import LogIn from "./components/Authorization/LogIn";
import GameLayout from "./components/Game/GameLayout";
import Main from "./components/Main";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/registration/' component={Registration} />
        <Route exact path='/login/' component={LogIn} />
        <Route exact path='/game/' component={GameLayout} />
    </div>
);

export default BaseRouter;
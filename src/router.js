import React from "react";
import {Route} from 'react-router-dom';
import Game from "./components/Game/Game";
import Registration from "./components/Authorization/Registartion";
import LogIn from "./components/Authorization/LogIn";
import GameLayout from "./components/Game/GameLayout";
import Main from "./components/Main";
import Sogl from "./components/Sogl";
import AdminLogIn from "./components/Admin/AdminLogIn";
import AdminPanel from "./components/Admin/AdminPanel";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main}/>
        <Route exact path='/registration/' component={Registration}/>
        <Route exact path='/login/' component={LogIn}/>
        <Route exact path='/game/' component={GameLayout}/>
        <Route exact path='/registration/s/' component={Sogl}/>

        <Route exact path='/admin_login/' component={AdminLogIn}/>
        <Route exact path='/admin_panel/' component={AdminPanel}/>
    </div>
);

export default BaseRouter;
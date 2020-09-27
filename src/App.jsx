import React from 'react';
import {inject, observer} from "mobx-react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import 'antd/dist/antd.css';

import HomePage from "./pages/Home";
import Header from "./components/Header";
import CorellationPage from "./pages/Corellation";



const App = inject('userStore')(observer((props) => {

    console.log(props.userStore.setData)

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/corellation'} component={CorellationPage}/>
            </Switch>
        </BrowserRouter>
    )
}))

export default App;
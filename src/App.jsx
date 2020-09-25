import React from 'react';
import {inject, observer} from "mobx-react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";



const App = inject('userStore')(observer((props) => {

    console.log(props.userStore.setData)

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}))

export default App;
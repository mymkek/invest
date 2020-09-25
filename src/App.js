import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import {stores} from "./stores/stores";
import {todoStore} from "./stores/userStore";




function App() {

    console.log(todoStore)

    return (
        <Provider {...stores}>
            <div>
                123
            </div>
        </Provider>
    );
}

export default App;

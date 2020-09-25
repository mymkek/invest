import {inject, observer} from "mobx-react";
import React from "react";


const HomePage = inject("userStore")(observer((props) => {

    console.log(props)
    return (
        <div>
            12312
        </div>
    )
}));

export default HomePage;
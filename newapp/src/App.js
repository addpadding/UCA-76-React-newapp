// ===========
import React, { Component } from "react";

import TestComp from "./Components/TestComp";
import TestHComp from "./Components/TestHComp";

// ===========
class App extends Component {
    state = {}

    render() {
        return (

            <div>
                {/* <TestComp x="value" /> */}
                <TestHComp x="value" y=" y value" />
            </div>

        )
    }
}

export default App;
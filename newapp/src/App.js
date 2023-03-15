// ===========
import React, { Component } from "react";

import CompA from "./Components/CompA"
import CompB from "./Components/CompB"

// ===========
class App extends Component {
    render() {
        console.log("App Comp");
        return (
            <div className="App">

                <CompA test="test Comp A" />
                <CompB />

            </div>
        )
    }
}

export default App;

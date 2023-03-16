// ===========
import React, { Component } from "react";

import CompA from "./Components/CompA"
import CompB from "./Components/CompB"

// ===========
class App extends Component {

    state = {
        name: "App Comp"
    }

    render() {
        return (
            <div className="App">

                <CompA name={this.state.name} />

            </div>
        )
    }
}

export default App;

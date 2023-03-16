// ===========
import React, { Component } from "react";

import CompA from "./Components/CompA"
import { CnxtProvider } from "./Components/contextComp"

// ===========
class App extends Component {

    state = {
        name: "App Comp"
    }

    render() {
        return (
            <CnxtProvider value={this.state.name} >

                <div className="App">
                    <CompA />
                </div>

            </CnxtProvider >
        )
    }
}

export default App;

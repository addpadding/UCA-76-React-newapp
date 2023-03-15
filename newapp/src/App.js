// ===========
import React, { Component } from "react";

import CompA from "./Components/CompA"
import CompB from "./Components/CompB"

import Comp from "./Components/Comp"

// ===========
class App extends Component {
    render() {
        return (
            <div className="App">

                {/* 
                <Comp test={(vl) => {
                    return vl
                }} /> */}

                <Comp
                    render={(arg1, arg2) => <CompA name={arg1} upDateNameState={arg2} />}
                />

                <Comp
                    render={(arg1, arg2) => <CompB name={arg1} upDateNameState={arg2} />}
                />

                {/* <CompA test="test Comp A" /> */}
                {/* <CompB /> */}

            </div>
        )
    }
}

export default App;

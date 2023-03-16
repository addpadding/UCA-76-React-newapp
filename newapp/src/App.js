// ===========
import React, { Component } from "react";

import CompA from "./Components/CompA"
import CompB from "./Components/CompB"

import Comp from "./Components/Comp"
import RenderProps from "./Components/RenderProps"

// const hamadan = (value) => {
//     console.log(value);
// }
// hamadan("ssss")

// ===========
class App extends Component {
    render() {
        return (
            <div className="App">

                {/* <RenderProps hamadan="any thing" /> */}
                <RenderProps hamadan={(value, p2) => {
                    return <div> {value}  {p2} </div>
                }} />

                <Comp
                    render={(arg1, arg2) => <CompA name={arg1} upDateNameState={arg2} />}
                />

                <Comp
                    render={(arg1, arg2) => <CompB name={arg1} upDateNameState={arg2} />}
                />


            </div>
        )
    }
}

export default App;

// ===========
import React, { Component } from "react";
import Home from "./Components/Home"

// ===========
class App extends Component {
    state = {
    }

    render() {
        // console.log(this.state.name);
        return (
            <div className="App">

                App Component

                <Home x="ssss" />

            </div>
        )
    }
}

export default App;

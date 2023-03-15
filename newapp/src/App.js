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

                <ul>
                    <Home />
                </ul>

                {/* <Home /> */}

            </div>
        )
    }
}

export default App;

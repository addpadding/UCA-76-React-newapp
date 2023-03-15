// ===========
import React, { Component } from "react";
import Home from "./Components/Home"

// ===========
class App extends Component {
    state = {
        name: "App Comp"
    }

    UpdateName = () => {
        this.setState({
            name: "App Comp 2"
        })
    }

    render() {
        console.log("App Comp");
        return (
            <div className="App">

                App Component

                <button onClick={this.UpdateName}>Update</button>

                <Home />

            </div>
        )
    }
}

export default App;

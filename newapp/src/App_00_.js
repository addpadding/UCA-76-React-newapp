// ===========
import React, { Component } from "react";

import Home from "./Components/Home";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";

import { BrowserRouter, Route } from "react-router-dom"


// ===========
class App extends Component {

    state = {
        name: "App Comp"
    }

    render() {
        return (

            <BrowserRouter>

                {<Route path="/" component={Home} />}

                <Home />
                <CompA />
                <CompB />

            </BrowserRouter>

        )
    }
}

export default App;

// BrowserRouter

// { <Route path="/" component={Home} /> }



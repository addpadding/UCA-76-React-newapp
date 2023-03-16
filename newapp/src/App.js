// ===========
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Components/Home";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";



// ===========
function App() {

    return (

        <BrowserRouter>

            <div>
                <h1> 6666 </h1>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/compa" element={<CompA />} />
                    <Route path="/compb" element={<CompB />} />
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App;







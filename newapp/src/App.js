
// {

// function App() {
//   return (
//     <div className="App">
//       hello React
//     </div>
//   );
// }

// export default App;

// }

import React, { Component } from "react";
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import List from "./Components/List"

import myImage from "./assets/img.png";

import "./App.css"

// ===========
class App extends Component {

    state = {
        products: [
            { id: 1, title: "item 1" },
            { id: 2, title: "item 2" },
            { id: 3, title: "item 3" },
            { id: 4, title: "item 4" },
        ]
    }

    render() {
        // console.log(this.state.name);
        return (
            <div className="App">

                {/* {this.state.name} */}
                <img src={myImage} width="100" alt="" />
                <img src="/public/images/img.png" alt="" />

                <Header
                    title="Header comp22"
                    desc="this is desc"
                    newData={this.state.desc}
                />

                content ...
                {/* {this.state.products.map((prod, i) => <div key={prod.id} >{prod.title} </div>)} */}
                <List products={this.state.products} />

                <Footer title="Footer comp22" />

            </div>
        )
    }
}

export default App;

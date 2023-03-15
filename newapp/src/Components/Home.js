import React, { Component, Fragment } from 'react'

class Home extends Component {

    constructor(props) {
        super();
        console.log("constructor");

        this.state = {
            name: "Home",
        }
    }


    render() {
        console.log("render");
        return (

            <Fragment>
                <li>Home</li>
                <li>About</li>
            </Fragment>

        )
    }
}

export default Home
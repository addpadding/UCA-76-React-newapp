import React, { Component } from 'react'

/*
    - Mounting [ constructor - getDerivedStateFromProps - render - componentDidMount]
    - Updating
    - UnMounting
*/

class Home extends Component {

    constructor(props) {
        super();
        console.log("constructor");

        this.state = {
            name: "Home",
        }
    }

    UpdateData = () => {
        this.setState({
            name: "Hame component"
        })
    }


    static getDerivedStateFromProps(props, state) {
        console.log("gdsfp = getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("CDM = componentDidMount");
    }

    render() {
        console.log("render");
        return (
            <div>
                Home

                <button onClick={this.UpdateData}>Update</button>
            </div>
        )
    }
}

export default Home
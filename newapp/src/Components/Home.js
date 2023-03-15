import React, { Component } from 'react'

/*
    - Mounting [ constructor - getDerivedStateFromProps - render - componentDidMount]
    - Updating [ getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate ]
    - UnMounting [ componentWillUnmount ]
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log("scu = shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("gsbu = getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("cdup = componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("cwun = componentWillUnmount")
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
import React, { Component } from 'react'

class TestComp extends Component {
    state = {
        product: "laptop"
    }

    componentDidMount() {
        console.log("this is cmd");
    }

    render() {
        return (
            <div>
                this is Test Comp {this.props.x}
            </div>
        )
    }
}

export default TestComp
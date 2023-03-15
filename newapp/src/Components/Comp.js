import React, { Component } from 'react'

class Comp extends Component {
    state = {
        name: "Comp"
    }

    upDateNameState = () => {
        this.setState({
            name: "Comp 2"
        })
    }


    render() {
        return (
            <div>
                {this.props.render(this.state.name, this.upDateNameState)}
            </div>
        )
    }
}

export default Comp
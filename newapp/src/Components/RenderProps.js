import React, { Component } from 'react'

class RenderProps extends Component {
    state = {
        name: "rrr"
    }

    render() {
        return (
            <div>
                {this.props.hamadan(this.state.name, "sssss")}
            </div>
        )
    }
}

export default RenderProps

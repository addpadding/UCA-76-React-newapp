import React, { Component } from 'react'

class CompA extends Component {
    render() {
        const { name, upDateNameState } = this.props;
        return (
            <div>
                {name}
                <button onClick={upDateNameState}>upDate Name</button>
            </div>
        )
    }
}
export default CompA

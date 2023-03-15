import React, { Component } from 'react'

import withComp from './withComp'

class CompA extends Component {
    render() {
        const { name, upDateNameState } = this.props;
        return (
            <div>
                {this.props.test}
                {name}
                <button onClick={upDateNameState}>upDate Name</button>
            </div>
        )
    }
}
export default withComp(CompA)

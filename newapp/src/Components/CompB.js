import React, { Component } from 'react'
import withComp from './withComp'


class CompB extends Component {
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
export default withComp(CompB)

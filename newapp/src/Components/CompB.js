import React, { Component } from 'react'
import withComp from './withComp'


class CompB extends Component {
    // state = {
    //     name: "Comp B"
    // }

    // upDateNameState = () => {
    //     this.setState({
    //         name: "Comp B 2"
    //     })
    // }


    render() {

        const { name, upDateNameState } = this.props;

        // const name = this.props.name
        // const upDateNameState = this.props.upDateNameState

        return (
            <div>
                {/* {this.props.name} */}
                {name}

                {/* <button onClick={this.props.upDateNameState}>upDate Name</button> */}
                <button onClick={upDateNameState}>upDate Name</button>
            </div>
        )
    }
}
export default withComp(CompB)

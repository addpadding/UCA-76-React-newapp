import React, { Component } from 'react'

import withComp from './withComp'

class CompA extends Component {
    // state = {
    //     name: "Comp A"
    // }

    // upDateNameState = () => {
    //     this.setState({
    //         name: "Comp A 2"
    //     })
    // }

    render() {
        // console.log(this.props);

        const { name, upDateNameState } = this.props;

        return (
            <div>
                {name}
                <button onClick={upDateNameState}>upDate Name</button>
            </div>
        )
    }
}
// export default withComp(CompA)
export default withComp(CompA)

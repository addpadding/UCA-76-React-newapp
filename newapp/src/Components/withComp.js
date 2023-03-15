import React, { Component } from 'react'

const withComp = (OrgComp) => {
    return class NewComp extends Component {
        state = {
            name: "Comp"
        }

        upDateNameState = () => {
            this.setState({
                name: "Comp 2"
            })
        }

        render() {
            return <OrgComp name={this.state.name} upDateNameState={this.upDateNameState} />
        }
    }
}

export default withComp
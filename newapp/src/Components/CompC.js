import React, { Component } from 'react'
import { CnxtConsumer } from "./contextComp"

class CompC extends Component {
    render() {
        return (
            <CnxtConsumer>

                {
                    (name) => {
                        return <div>wwww{name}</div>
                    }
                }

            </CnxtConsumer>
        )
    }
}

export default CompC

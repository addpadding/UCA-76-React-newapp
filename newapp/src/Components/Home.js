import React, { Component, createRef } from 'react'

class Home extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.callBackRef = null
        this.callBackRefFun = (ele) => {
            this.callBackRef = ele;
        }
    }

    componentDidMount() {
        if (this.callBackRef) {
            this.callBackRef.focus()
        }
    }

    render() {
        return (

            <div>
                <input type="text" ref={this.callBackRefFun} />
            </div>

        )
    }
}

export default Home
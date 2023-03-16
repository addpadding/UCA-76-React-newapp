import React, { Component, createRef } from 'react'

class Home extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)


        this.inputRef = createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        console.log("Home Comp");
        return (

            <div>
                <input type="text" ref={this.inputRef} />
            </div>

        )
    }
}

export default Home
import React, { Component } from 'react';
class renderCounter extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            renderCount : 0
         };
    }
    render() {
        const count = this.state.renderCount++;
        return (
            <div className='renderCounter'><div>{count}</div></div>
        );
    }
}

export default renderCounter;
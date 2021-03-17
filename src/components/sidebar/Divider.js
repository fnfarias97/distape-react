import React, { Component } from 'react';

class Divider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<hr className={`sidebar-divider ${this.props.my0 === "true"? "my-0" : ""}`} />);
    }
}
 
export default Divider;
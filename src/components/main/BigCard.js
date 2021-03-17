import React, { Component } from 'react';

class BigCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{this.props.heading}</h6>
                </div>
                {this.props.children}
            </div>
        </div>);
    }
}
 
export default BigCard;
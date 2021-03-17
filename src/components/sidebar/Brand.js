import React, { Component } from 'react';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">{this.props.brandName}</div>
        </a>);
    }
}
 
export default Brand;
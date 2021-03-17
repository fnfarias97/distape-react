import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toggleActive() {
        this.setState(prevState => ({ active: !prevState.active }));
        
        // console.log(this.state.active);
    }

    render() { 
        const isActive = this.state.active;

        return (<li onClick={this.toggleActive.bind(this)} className={`nav-item ${isActive? "active" : ""}`}  >
                <a className={`nav-link ${this.props.classes}`} href="/">
					<i className={`fas fa-fw ${this.props.icon}`}></i>
				    <span>{this.props.innerText}</span>
                </a>
        </li>);
    }
}
 
export default NavItem;
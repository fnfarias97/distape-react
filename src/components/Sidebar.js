import React, { Component } from 'react';
import Brand from './sidebar/Brand'
import Divider from './sidebar/Divider'
import NavItem from './sidebar/NavItem'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    
                    <Brand brandName="Admin"/>

                <Divider my0="true" />

                    <NavItem innerText="Dashboard" icon="fa-tachometer-alt"/>
                
                <Divider />

                    <div className="sidebar-heading">Actions</div>
                    <NavItem innerText="Pages" icon="fa-folder" classes="collapsed"/>
                    <NavItem innerText="Charts" icon="fa-chart-area" />
                    <NavItem innerText="Tables" icon="fa-table" />

                <Divider />

            </ul>);
    }
}
 
export default Sidebar;
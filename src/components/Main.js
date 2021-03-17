import React, { Component } from 'react';
import Navbar from './main/Navbar';
import PageContent from './main/PageContent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<main id="content">
            <Navbar />
            <PageContent heading="App Dashboard"/>
            <PageContent heading="All the products in the Database" />
        </main>);
    }
}
 
export default Main;
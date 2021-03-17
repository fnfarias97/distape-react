import React, { Component } from 'react';
import Footer from './Footer';
import Main from './Main';

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div id="content-wrapper" className="d-flex flex-column">
            <Main />
            <Footer innerText="Copyright &copy; Dashboard 2020" />
        </div>);
    }
}
 
export default ContentWrapper;
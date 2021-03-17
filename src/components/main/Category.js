import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="col-lg-6 mb-4">
            <div class="card bg-info text-white shadow">
                <div class="card-body">
                    {this.props.innerText}
                </div>
            </div>
        </div>);
    }
}
 
export default Category;
import React, { Component } from 'react';
import BigCard from './BigCard';
import Category from './Category';
import SmallCard from './SmallCard';

const lastDBProduct = {
    heading: "Last product in Data Base",
    body: <div className="card-body">
        <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="images/product_dummy.svg" alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
        <a target="_blank" rel="nofollow" href="/">View product detail</a>
    </div>
} 

const categories = {
    heading: "Categories in Data Base",
    body:<div class="card-body">
        <div class="row">
            <Category innerText="Category 01"/>
            <Category innerText="Category 02"/>
            <Category innerText="Category 03"/>
            <Category innerText="Category 04"/>
            <Category innerText="Category 05"/>
            <Category innerText="Category 06"/>
        </div>
    </div>
    
}

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{this.props.heading}</h1>
            </div>

            <div className="row">
                <SmallCard color="primary" amount="135" icon="clipboard-list" innerText=" Products in Data Base"/>
                <SmallCard color="success" amount="$546.456" icon="dollar-sign" innerText=" Amount in products" />
                <SmallCard color="warning" amount="38" icon="user-check" innerText="Users quantity" />
            </div>

            <div className="row">
                <BigCard heading={lastDBProduct.heading}>
                    {lastDBProduct.body}
                </BigCard>
                <BigCard heading={categories.heading}>
                    {categories.body}
                </BigCard>
            </div>
        </div>);
    }
}
 
export default PageContent;
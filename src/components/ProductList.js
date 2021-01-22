import React from 'react';
import {connect} from 'react-redux';

import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    const getProducts = () =>{
        return products.map(product=><ProductItem price = {product.price} name={product.productName}/>);
    };
    return(
        <div className = "ui segment center aligned">
        <h1>Collections</h1>
        <span>balls</span>
        <div className="ui four column grid">
        {getProducts()}

        </div>
        </div>
    );
};
const mapPropsToState = (state) =>{
    return{
        products: state.products
    }
}

export default connect(mapPropsToState)(ProductList);
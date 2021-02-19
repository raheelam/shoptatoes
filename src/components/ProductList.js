import React from 'react';
import {connect} from 'react-redux';

import ProductItem from './ProductItem';

//the products group property is the name of groups of products in the redux store  e.g featured, collections, all
const ProductList = ({products,  header, subHeader, children}) => {
    const getProducts = () =>{
        if(!products){
            return '';
        }
        return products.map(product=><ProductItem key={product.id} price = {product.price} name={product.productName} id={product.id} image={product.imageUrl} />);
    };
    return(
        <div style={{padding:"36px 0px 36px 0px"}} className = "  ui container center aligned">
        <h1 style={{marginBottom:"36px"}} className="ui  header">
            {header}
            <span className="sub header">{subHeader}</span>
        </h1>
        
        <div className="ui four column grid center aligned">
        {getProducts()}

        </div>
        </div>
    );
};
const mapPropsToState = (state,ownProps) =>{
    return{
        products: state[ownProps.productsGroup]
    }
}

//export default connect(mapPropsToState)(ProductList);
export default ProductList;
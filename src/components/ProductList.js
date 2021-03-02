import React from 'react';

import {useMediaPredicate} from "react-media-hook";
import {setSlider, plusSlides} from '../util/slider';
import ProductItem from './ProductItem';


//the products group property is the name of groups of products in the redux store  e.g featured, collections, all
const ProductList = ({products,  header, subHeader, children}) => {
    const lessThan540 = useMediaPredicate("(max-width: 540px)");
    const getProducts = (ms) =>{
        if(!products){
            return '';
        }
        console.log(products.map(product=><ProductItem key={product.id} sliderClass={ms} price = {product.price} name={product.productName} id={product.id} image={product.imageUrl} />))
        return products.map(product=><ProductItem key={product.id} sliderClass={ms} price = {product.price} name={product.productName} id={product.id} image={product.imageUrl} />);

    };
    return(
        <div style={{padding:"36px 0px 36px 0px"}} className = "  ui container center aligned">
        <h1 style={{marginBottom:"36px"}} className="ui  header">
            {header}
            <span className="sub header">{subHeader}</span>
        </h1>
        {  !lessThan540 &&
        <div className="ui four column grid center aligned">
        {getProducts('')}

        </div>
        }

        {
            lessThan540 &&
            <div>
             {getProducts('productSlider')}{setSlider('productSlider')} 
             <i className="arrow left icon" onClick={()=>{plusSlides(-1, 'productSlider')}}></i>
             <i className="arrow right icon" onClick={()=>{plusSlides(1, 'productSlider')}}></i>
             
            </div>
            
        }
        </div>
    );
};


//export default connect(mapPropsToState)(ProductList);
export default ProductList;
import React from 'react';

import ProductItem from './ProductItem';
import {useMediaQuery} from '../hooks/mediaQuery';



//ProductList component
const ProductList = ({products,  header, subHeader, children}) => {
    const lessThan900 = useMediaQuery("(max-width: 900px)");
    const lessThan420 = useMediaQuery("(max-width: 420px)");
    
   // const numberOfColumns=  (lessThan420 && 'one') || (lessThan900 && 'three')||'five';
    
    const getProducts = () =>{
        if(!products || products.length === 0){
            return <div style={{height: "40vh"}}><div  className="ui segment"><i className="spinner loading icon"></i>Loading...</div></div>;
        }else if(products[0].error){
           return <div style={{height: "40vh"}}><div  className="ui segment">Not found. Please recheck the name and try again</div></div>;
        }else{
        return products.map(product=><ProductItem key={product.id}  price = {product.price} name={product.name} id={product.id} />);
        }
    };
    return(
        <div style={{padding:"16px 0px 36px 0px"}} className = "  ui section ">
        <h1 style={{marginBottom:"10px"}} className="ui  header">
            {header}
            <span className="sub header">{subHeader}</span>
        </h1>
        <div style={{marginBottom: "30px"}}>{children}</div>
        <div className={`ui ${(lessThan420 && 'one') || (lessThan900 && 'three')||'five'} column  grid center aligned`}>
        
        {getProducts()}
        

        </div>
        </div>
    );
};
export default ProductList;
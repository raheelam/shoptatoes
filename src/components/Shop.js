import React from 'react';

import ProductList from './ProductList';
import OptionMenu from './OptionMenu';

const searchOptions = [
    {
        label: "balls",
        value: "balls"
    },
    {
        label: "potatoes",
        value: "potatoes"
    }
]
const Shop = () => {
   
    return(
        
        <div className="">
            <ProductList header="Shop" productsGroup="products" >
            <div style={{textAlign:"right"}}className="">
            <OptionMenu options={searchOptions} />
            <OptionMenu options={searchOptions} onChangeH={(e)=>e.event.value} />
            </div>
            </ProductList> 
        </div>
    );
}

export default Shop;

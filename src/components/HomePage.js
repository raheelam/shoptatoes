import React from 'react';

import ProductList from './ProductList';


const HomePage = () => {
   
    return(
        
        <div className="">
            <ProductList header="Collections" subHeader="potatoes" productsGroup="featuredProducts" />  
        </div>
    );
}

export default HomePage;
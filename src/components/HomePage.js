import React from 'react';

import ProductList from './ProductList';
import TopPart from './TopPart';
import Section2 from './Section2';
import Companies from './Companies';


const HomePage = () => {
   
    return(
        
        <>
            <TopPart />
            <Companies />
            <Section2 />
            <ProductList header="Collections" subHeader="potatoes" productsGroup="featuredProducts" />  
        </>
    );
}

export default HomePage;
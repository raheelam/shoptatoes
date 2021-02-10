import React from 'react';

import ProductList from './ProductList';
import TopPart from './TopPart';
import Section2 from './Section2';
import Companies from './Companies';
import Section3 from './Section3';
import CustomerReviews from './CustomerReviews';
import Section4 from './Section4';
import StayInTouch from './StayInTouch';
import TestScrollReviews from './TestScrollReviews';



const HomePage = () => {
   
    return(
        
        <>
            <TopPart />
            <Companies />
            <Section2 />
            <ProductList header="Collections" subHeader="potatoes" productsGroup="featuredProducts" />  
            <Section3 />
            <CustomerReviews />
            <Section4 />
            <StayInTouch />
            <TestScrollReviews />
        </>
    );
}

export default HomePage;
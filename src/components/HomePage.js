import React from 'react';
import {connect} from 'react-redux';

import {useMediaPredicate} from "react-media-hook";
import ProductList from './ProductList';
import TopPart from './TopPart';
import Section2 from './Section2';
import Companies from './Companies';
import Section3 from './Section3';
import CustomerReviews from './CustomerReviews';
import Section4 from './Section4';
import StayInTouch from './StayInTouch';
//import TestScrollReviews from './TestScrollReviews';



const HomePage = ({featuredProducts}) => {
    const lessThan540 = useMediaPredicate("(max-width: 540px)");
    return(
        
        <>
            <TopPart />
            {  !lessThan540 &&
            <Companies />

            }
            <Section2 />
            <ProductList header="Collections" subHeader="potatoes" products = {featuredProducts} />  
            <Section3 />
            <CustomerReviews />
            <Section4 />
            <StayInTouch />
            
        </>
    );
}
const mapStateToProps = (state) =>{
    return {
        featuredProducts: state.featuredProducts
    }
}
export default connect(mapStateToProps)(HomePage);
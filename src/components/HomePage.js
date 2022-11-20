import React from 'react';
import { connect } from 'react-redux';

import TopPart from './TopPart';
import Section2 from './Section2';
import Companies from './Companies';
import Section3 from './Section3';
import CustomerReviews from './CustomerReviews';
import Section4 from './Section4';
import StayInTouch from './StayInTouch';
import CollectionList from './CollectionList';
import styled from 'styled-components';
//import TestScrollReviews from './TestScrollReviews';

const CompaniesWrapper = styled.div`
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const HomePage = ({ featuredProducts }) => {
  return (
    <>
      <TopPart />
      <CompaniesWrapper>
        <Companies />
      </CompaniesWrapper>
      <Section2 />
      <CollectionList
        header="Collections"
        subHeader="potatoes"
        products={featuredProducts}
      />
      <Section3 />
      <CustomerReviews />
      <Section4 />
      <StayInTouch />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    featuredProducts: state.featuredProducts,
  };
};
export default connect(mapStateToProps)(HomePage);

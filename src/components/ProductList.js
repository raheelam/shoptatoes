import React from 'react';

import { useMediaPredicate } from 'react-media-hook';
import styled from 'styled-components';
import { setSlider, plusSlides } from '../util/slider';
import ProductItem from './ProductItem';

const ProductListWrapper = styled.div`
  --gap: 16px;

  display: flex;
  gap: var(--gap);

  width: 100%;
  flex-wrap: wrap;
  text-align: center;

  align-items: center;
  .product-card {
    @media only screen and (max-width: 4068px) {
      --average-gap-lg: calc((var(--gap) * 4) / 5);
      width: calc(20% - var(--average-gap-lg));
    }
    @media only screen and (max-width: 768px) {
      --average-gap-sm: calc((var(--gap) * 1) / 2);
      width: calc(50% - var(--average-gap-sm));
    }

    @media only screen and (max-width: 468px) {
      width: 100%;
    }
  }
`;

//the products group property is the name of groups of products in the redux store  e.g featured, collections, all
const ProductList = ({ products, header, subHeader, children }) => {
  const lessThan540 = useMediaPredicate('(max-width: 540px)');
  const getProducts = (ms) => {
    if (!products) {
      return '';
    }
    // console.log(
    //   products.map((product) => (
    //     <ProductItem
    //       key={product.id}
    //       sliderClass={ms}
    //       price={product.price}
    //       name={product.productName}
    //       id={product.id}
    //       image={product.imageUrl}
    //     />
    //   ))
    // );
    return products.map((product) => (
      <ProductItem
        key={product.id}
        sliderClass={ms}
        price={product.price}
        name={product.productName}
        id={product.id}
        image={product.imageUrl}
        className="product-card"
      />
    ));
  };
  return (
    <div
      style={{
        padding: '36px 0px 36px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      //   className="  ui container center aligned"
    >
      <h1
        style={{ marginBottom: '36px', textAlign: 'center' }}
        className="ui  header"
      >
        {header}
        <span className="sub header">{subHeader}</span>
      </h1>
      {/* {!lessThan540 && ( */}
      <div
        style={{
          display: 'flex',
          width: '90vw',
          // gap: '1rem',
          // flexWrap: 'wrap',
          // textAlign: 'center',
          // width: '90vw',
          // margin: '0 auto',
          // // width: '95vw',
          // // padding: '10px',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProductListWrapper>{getProducts('')}</ProductListWrapper>
      </div>

      {/* )} */}

      {/* {lessThan540 && (
        <div>
          {getProducts('productSlider')}
          {setSlider('productSlider')}
          <i
            className="arrow left icon"
            onClick={() => {
              plusSlides(-1, 'productSlider');
            }}
          ></i>
          <i
            className="arrow right icon"
            onClick={() => {
              plusSlides(1, 'productSlider');
            }}
          ></i>
        </div>
      )} */}
    </div>
  );
};

//export default connect(mapPropsToState)(ProductList);
export default ProductList;

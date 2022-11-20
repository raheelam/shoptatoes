import React from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

export const UnlimtitedScrollWrapper = styled.div.attrs({
  className: 'hide-scroll',
})`
  --gap: 16px;

  display: flex;
  gap: var(--gap);

  width: 100%;
  overflow: auto;
  // padding: 0 1rem;
  // text-align: center;
  flex-shrink: 0;
  // align-items: center;

  .product-card {
    min-width: 12rem;
  }
`;

//the products group property is the name of groups of products in the redux store  e.g featured, collections, all
const CollectionList = ({ products, header, subHeader, children }) => {
  //   const lessThan540 = useMediaPredicate('(max-width: 540px)');
  const getProducts = (ms) => {
    if (!products) {
      return '';
    }

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
    >
      <h1
        style={{ marginBottom: '36px', textAlign: 'center' }}
        className="ui  header"
      >
        {header}
        <span className="sub header">{subHeader}</span>
      </h1>

      <div
        style={{
          display: 'flex',
          width: '85vw',
          padding: 0,
          // overflow: 'auto',
          justifyContent: 'center',
        }}
      >
        <UnlimtitedScrollWrapper>{getProducts('')}</UnlimtitedScrollWrapper>
      </div>
    </div>
  );
};

//export default connect(mapPropsToState)(ProductList);
export default CollectionList;

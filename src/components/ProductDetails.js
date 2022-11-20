import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Rating from './Rating';
import Accordion from './Accordion';
import styled from 'styled-components';
const imgStyle = {
  width: '100%',
  height: '450px',
};
const descStyle = {
  height: '85%',
  padding: '5px',
  border: '1px solid lightgrey',
  width: '86%',
  borderRadius: '5px',
  overflow: 'auto',
};

const ProductInformationBox = styled.div`
  // background: green;
  // height: fit-content;
  position: relative;
  padding: 0 0 0 2rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding-left: 2rem;
    height: fit-content;
  }
`;

const ProductSection = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 55% 35%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

//ProductDetails Component
const ProductDetails = ({ product, products, items }) => {
  //useEffect(()=>fetchProducts(), [fetchProducts]);
  useEffect(() => window.scrollTo(0, 0));

  if (!product) {
    return <div style={{ height: '50vh' }}>loading...</div>;
  }
  return (
    <div className="">
      <ProductSection>
        <img
          alt={product.productName}
          style={imgStyle}
          src={product.imageUrl}
        />

        <ProductInformationBox>
          <div
            className="item"
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              // justifyContent: 'space-between',
              // paddingRight: '1rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.5rem',
                marginBottom: '5px',
              }}
              className="ui header"
            >
              {product.productName}
            </h1>
            <span
              className="like"
              style={{
                padding: '5px',
                background: 'black',
                color: 'white',
              }}
            >
              {/* <b>Likes:</b> */}
              {product.totalLikes} <i className="like red icon"></i>
            </span>

            {/* <span>store name</span> */}
          </div>
          <br></br>
          <span>
            <b>Price:</b> <br></br> &#8358;{product.price}
          </span>
          <ProductForm product={product} />
          <br></br>
          <br></br>
          <div
            style={{
              marginTop: 'auto',
              height: '50%',
              // background: 'green',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: '30%' }}>
              <span>
                <b>Rating:</b>
              </span>
              <br></br>
              <Rating rating={product.rating} />
            </div>
            {/* <br></br> */}
            <div style={{ height: '70%' }}>
              <div style={{ height: '15%' }}>
                <b>Description:</b> <br></br>
              </div>

              <div style={descStyle} className="description">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </ProductInformationBox>
      </ProductSection>
      <ProductList
        similarItems="true"
        unlimitedScroll
        header="Similar Products"
        products={products}
      />
      <Accordion items={items} heading="Frequently Asked Questions" />
    </div>
  );
}; //End of ProductDetails component

const mapPropsToState = (state, ownProps) => {
  console.log(ownProps.match);
  console.log('---', ownProps.match.params.id);
  console.log(state.products);

  const id = ownProps.match.params.id;
  const pro = state.products.find((el) => el.id.toString() === id);
  const similarPro = state.products.filter(
    (el) => el.category === pro.category
  );
  let items = [
    {
      title: 'blah blah blah blah question1?',
      content:
        'blahblahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
      title: 'blah blah blah blah question2?',
      content:
        'blahblahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
      title: 'blah blah blah blah question3?',
      content:
        'blahblahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
      title: 'blah blah blah blah question4?',
      content:
        'blahblahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
  ];
  console.log('---', pro);
  return {
    product: pro,
    products: similarPro,
    items: items,
  };
};
export default connect(mapPropsToState)(ProductDetails);

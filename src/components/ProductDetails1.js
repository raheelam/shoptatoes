import React from 'react';
import { connect } from 'react-redux';

const ProductDetails = (props) => {
  console.log(props);
  if (!props.product) {
    return <div>loading...</div>;
  }
  return (
    <div style={{ margin: '20px' }}>
      <h1>{props.product.productName}</h1>
    </div>
  );
};
const mapPropsToState = (state, ownProps) => {
  console.log('---', ownProps.match.params.id);
  console.log(state.products);
  const pro = state.products.find((el) => el.id === ownProps.match.params.id);
  //const pro = _.find(state.products,  {'id': `${ownProps.match.params.id}`});
  console.log('---', pro);
  return {
    product: pro,
  };
};
export default connect(mapPropsToState)(ProductDetails);

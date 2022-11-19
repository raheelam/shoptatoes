import React from 'react';
import { connect } from 'react-redux';
import { selectQty, selectSize, addToCart, increaseQty } from '../actions';

const ProductForm = (props) => {
  //destructuring props
  const {
    selectedQty,
    selectedSize,
    increaseQty,
    addToCart,
    selectQty,
    selectSize,
    product,
    cart,
  } = props;

  //add to cart function
  const handleSubmit = (e) => {
    e.preventDefault();
    const cartId = product.objectID.toString() + selectedSize;
    const orderItem = cart.find(
      (p) => p.objectID === product.objectID && p.cartId === cartId
    );
    if (orderItem) {
      const newQty = orderItem.selectedQty + selectedQty;
      console.log('.........', orderItem.cartId);
      increaseQty({ selectedQty: newQty, cartId: cartId });
    } else {
      addToCart({
        selectedQty: selectedQty,
        cartId: cartId,
        selectedSize: selectedSize,
        ...product,
      });
    }
  }; //End of add to cart function

  return (
    <form
      style={{ margin: '10px 0px' }}
      className="ui tiny form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div
        className="inline field"
        style={{ display: 'flex' }}
        onChange={(e) => selectSize(e.target.value)}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <input name="size" type="radio" value="L" />
          Size L
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <input defaultChecked name="size" type="radio" value="M" /> Size M
        </label>
      </div>
      <div
        className="inline field"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          //   alignItems: 'center',
          //   gap: '0.2rem',
        }}
      >
        {/* <label>Qty:</label> */}
        <input
          style={{ width: '70px' }}
          //   className="three wide field"
          name="quantity"
          onChange={(e) => {
            if (e.target.value !== '') {
              selectQty(e.target.value);
            }
          }}
          value={selectedQty}
          required
          type="number"
          min="1"
        />
        <button
          //   style={{ margin: '10px 0px 0px 10px' }}
          className="compact ui button "
        >
          Add to cart
        </button>
      </div>
    </form>
  );
}; //End of ProductForm component

const mapPropsToState = (state) => {
  console.log([state.cart, state.selectedQty, state.selectedSize]);
  return {
    cart: state.cart,
    selectedQty: state.selectedQty,
    selectedSize: state.selectedSize,
  };
};

export default connect(mapPropsToState, {
  selectQty,
  selectSize,
  addToCart,
  increaseQty,
})(ProductForm);

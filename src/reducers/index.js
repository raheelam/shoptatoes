import { combineReducers } from 'redux';
import { featuredProducts, products } from '../mocks/products';

const productsReducer = () => {
  return products;
};

const featuredProductsReducer = () => {
  return featuredProducts;
};

const selectedProductsReducer = (selectedProducts = null, action) => {
  return [
    { productName: 'food', price: 50, id: 1 },
    { productName: 'drink', price: 50, id: 2 },
    { productName: 'water', price: 50, id: 3 },
    { productName: 'braincell', price: 0, id: 4 },
  ];
};

const selectedProductReducer = (selectedProduct = null, action) => {
  if (action.type === 'SELECT_PRODUCT') {
    return action.payload;
  }
  return selectedProduct;
};

const selectedOptionReducer = (selectedOption = null, action) => {
  if (action.type === 'SELECT_OPTION') {
    return action.payload;
  } else return selectedOption;
};

const selectSizeReducer = (state = '', action) => {
  if (action.type === 'SELECT_SIZE') {
    return action.payload;
  }
  return state;
};
const selectQtyReducer = (state = 1, action) => {
  if (action.type === 'SELECT_QTY') {
    return parseInt(action.payload);
  }
  return state;
};

const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'INCREASE_QTY':
      return state.map((item) => {
        if (item.cartId === action.payload.cartId) {
          item.selectedQty = action.payload.selectedQty;
        }

        return item;
      });
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.objectID !== action.payload);
    case 'EMPTY_CART':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  featuredProducts: featuredProductsReducer,
  selectedSize: selectSizeReducer,
  selectedQty: selectQtyReducer,
  cart: addToCartReducer,
  selectedProduct: selectedProductReducer,
  selectedOption: selectedOptionReducer,
  selectedProducts: selectedProductsReducer,
});

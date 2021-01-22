const getProducts = () =>{
    //gotta use lodash later on when i want to use this and react thunk
  return {
      type: 'GET_PRODUCTS'
  }
};

export const selectProduct = (product)=>{
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    }

};
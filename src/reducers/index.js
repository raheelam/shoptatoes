import {combineReducers} from 'redux';

const productsReducer = () =>{
    return [
        {productName: "food", price: 50},
        {productName: "drink", price: 50},
        {productName: "wtaer", price: 50},
        {productName: "braincell", price: 0},
        {productName: "food", price: 50},
        {productName: "drink", price: 50},
        {productName: "wtaer", price: 50},
        {productName: "braincell", price: 0}
    ];

};

const selectedProductReducer = (selectedProduct = null,action) =>{
    if(action.type === "SELECT_PRODUCT"){
        return action.payload;
    }
    return selectedProduct;


}

export default combineReducers(
    {
        products: productsReducer,
        selectedProduct: selectedProductReducer

    }
);
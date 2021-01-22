import {combineReducers} from 'redux';

const productsReducer = () =>{
    return [
        {productName: "food", price: 50,id:1},
        {productName: "drink", price: 50,id:2},
        {productName: "wtaer", price: 50,id:3},
        {productName: "braincell", price: 0,id:4},
        {productName: "food", price: 50,id:5},
        {productName: "drink", price: 50,id:6},
        {productName: "wtaer", price: 50,id:7},
        {productName: "braincell", price: 0,id:8}
    ];

};

const featuredProductsReducer= ()=>{
    return [
        {productName: "food", price: 50,id:1},
        {productName: "drink", price: 50,id:2},
        {productName: "wtaer", price: 50,id:3},
        {productName: "braincell", price: 0,id:4}
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
        featuredProducts: featuredProductsReducer,
        selectedProduct: selectedProductReducer

    }
);
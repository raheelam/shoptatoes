import {combineReducers} from 'redux';

const productsReducer = () =>{
    return [
        {productName: "food", price: 50,id:1, category: "food", description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?cs=srgb&dl=pexels-houzlook-com-3356416.jpg&fm=jpg"},
        {productName: "drink", price: 50,id:2, category: "drink" , description: "blah blah blah balh", imageUrl:"https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6198663.jpg&fm=jpg"},
        {productName: "wtaer", price: 50,id:3, category: "water" , description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571463.jpg&fm=jpg"},
        {productName: "braincell", price: 0,id:4, category: "misc" , description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/6207824/pexels-photo-6207824.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6207824.jpg&fm=jpg"},
        {productName: "food", price: 50,id:5, category: "food" , description: "blah blah blah balh", imageUrl:"https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg"},
        {productName: "drink", price: 50,id:6, category:"drink" , description: "blah blah blah balh", imageUrl:"https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg?cs=srgb&dl=pexels-photomix-company-932095.jpg&fm=jpg"},
        {productName: "wtaer", price: 50,id:7, category:"water" , description: "blah blah blah balh"},
        {productName: "braincell", price: 0,id:8, category: "Misc" , description: "blah blah blah balh"}
    ];

};

const featuredProductsReducer= ()=>{
    return [
        {productName: "food", price: 50,id:1, category: "food", description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?cs=srgb&dl=pexels-houzlook-com-3356416.jpg&fm=jpg"},
        {productName: "drink", price: 50,id:2, category: "drink" , description: "blah blah blah balh", imageUrl:"https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6198663.jpg&fm=jpg"},
        {productName: "wtaer", price: 50,id:3, category: "water" , description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571463.jpg&fm=jpg"},
        {productName: "braincell", price: 0,id:4, category: "misc" , description: "blah blah blah balh", imageUrl: "https://images.pexels.com/photos/6207824/pexels-photo-6207824.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6207824.jpg&fm=jpg"},
    ];

};

const selectedProductsReducer = (selectedProducts = null,action) =>{
    return [
        {productName: "food", price: 50,id:1},
        {productName: "drink", price: 50,id:2},
        {productName: "water", price: 50,id:3},
        {productName: "braincell", price: 0,id:4}
    ];
};


const selectedProductReducer = (selectedProduct = null,action) =>{
    if(action.type === "SELECT_PRODUCT"){
        return action.payload;
    }
    return selectedProduct;
};

const selectedOptionReducer = (selectedOption = null,action) =>{
  
    if(action.type === "SELECT_OPTION"){
        return action.payload;
    }else 
    return selectedOption;
}

const selectSizeReducer = (state="", action)=>{
    if(action.type === "SELECT_SIZE"){
        return action.payload;
    }
    return state;

};
const selectQtyReducer = (state=1, action) =>{
    if(action.type === "SELECT_QTY"){
        return parseInt(action.payload);
    }
    return state;

}

const setSearchTermReducer = (state="chika_empires", action) =>{
    if(action.type === "SET_SEARCH_TERM"){
        return action.payload
    }
    return state;

}

const addToCartReducer = (state=[], action)=>{
    switch(action.type ){
        case "ADD_TO_CART": 
        return [...state, action.payload];
        case "INCREASE_QTY":
        return (state.map(item =>
             {
              if (item.cartId === action.payload.cartId){
               
                item.selectedQty = action.payload.selectedQty ;
              }
              
             return item;
            } ));
        case "REMOVE_FROM_CART": 
            return state.filter(item => item.objectID !== action.payload  );
        case "EMPTY_CART":
            return [];
        default:  return state;
    }
  

}



export default combineReducers(
    {
        products: productsReducer,
        featuredProducts: featuredProductsReducer,
        selectedSize: selectSizeReducer,
        selectedQty: selectQtyReducer,
         cart: addToCartReducer,
        selectedProduct: selectedProductReducer,
        selectedOption: selectedOptionReducer,
        selectedProducts: selectedProductsReducer,

    }
);
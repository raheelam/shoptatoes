import React, {useState} from 'react';


import ProductList from './ProductList';
import Options from './Options';

const categoryOptions = [
    {
        label: "balls",
        value: "balls"
    },
    {
        label: "potatoes",
        value: "potatoes"
    }
];

const sortingOptions = [
    {
        label: "most popular",
        value: "mostPopular"
    },
    {
        label: "lowest price",
        value: "lowestPrice"
    }
];
const Shop = () => {
   const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);
   const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
   //on mount or change category go search for products based of the selected category
   //create an action creator that takes category as a parameter and returns those products
    return(
        
        <div className="">
            <ProductList header="Shop" productsGroup="products" >
            <div style={{textAlign:"right"}}className="">
            <Options options={categoryOptions} selectedOption={selectedCategory} onChange={setSelectedCategory}/>
            <Options options={sortingOptions} selectedOption={selectedSorting} onChange={setSelectedSorting} />
            </div>
            </ProductList> 
        </div>
    );
}

export default Shop;

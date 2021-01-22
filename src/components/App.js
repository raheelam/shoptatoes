import React from 'react';

import ProductList from './ProductList';

const App = () => {
   
    return(
        <div className="ui container">
            
                  <ProductList header="Collections" subHeader="potatoes" productsGroup="products" />
                  <ProductList header="Shop" productsGroup="featuredProducts" />
                      
                  
            
        </div>
    );
}

export default App;
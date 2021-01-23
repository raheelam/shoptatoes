import React from 'react';

import ProductList from './ProductList';
import Header from './Header';

const App = () => {
   
    return(
        
        <div className="ui container">
        
        
                  <Header />
                  <ProductList header="Collections" subHeader="potatoes" productsGroup="products" />
                  <ProductList header="Shop" productsGroup="featuredProducts" />
                      
                  
            
        </div>
    );
}

export default App;
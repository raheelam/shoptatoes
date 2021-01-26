import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Shop from './Shop';
import ProductDetails from './ProductDetails'
import Header from './Header';
import Footer from './Footer'

const App = () => {
   
    return(
        
        <div className="">
            <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/product/:id" exact component={ProductDetails} />
          
          <Footer />
        </div>
      </BrowserRouter>
                      
                  
            
        </div>
    );
}

export default App;
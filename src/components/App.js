import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Shop from './Shop';
import ProductDetails from './ProductDetails';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{ padding: 0, margin: 0 }}>
          <Header />
          <Route path="/shop" exact component={Shop} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/" exact component={HomePage} />

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

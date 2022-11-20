import { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList';

const Shop = ({ products }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  //on mount or change category go search for products based of the selected category
  //create an action creator that takes category as a parameter and returns those products
  return (
    <div style={{ minHeight: '100vh' }}>
      <ProductList products={products} header="Shop" productsGroup="products" />

      {/* <div style={{ textAlign: 'right' }} className="">
        <Options
          options={categoryOptions}
          selectedOption={selectedCategory}
          onChange={setSelectedCategory}
        />
        <Options
          options={sortingOptions}
          selectedOption={selectedSorting}
          onChange={setSelectedSorting}
        />
      </div> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Shop);

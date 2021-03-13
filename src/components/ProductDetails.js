import React, {useEffect} from 'react';
import {connect} from 'react-redux';


import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Rating from './Rating';
import Accordion from './Accordion';
const imgStyle = {
    width: "100%",
    height: "450px"
    
  }
  const descStyle = {
    height: "30vh",
    overflow: "auto"
  }

//ProductDetails Component
const ProductDetails = ({product,  products}) => {
    //useEffect(()=>fetchProducts(), [fetchProducts]);
    useEffect(()=>window.scrollTo(0,0));
    console.log(product);
    if(!product){
       return <div style={{height: "50vh"}}>loading...</div>
   }
    return(
        <div className="">
        <div className = "ui grid column">
    <div className="nine wide column">
      <img alt={product.productName} style={imgStyle} src={product.imageUrl}/>
    </div>
    <div className="seven wide column">
    <div className = "item">
      <h1 style={{marginBottom: "0"}} className="ui header">{product.productName}</h1>
      <span>store name</span><br></br>
      <span><b>Price:</b> &#8358; {product.price}</span><br></br>
      <span className="like">
          <i className="like red icon"></i>
          4 Likes
        </span>
        <Rating rating={product.totalRankingPoint}  />
      </div>
     
      <ProductForm product={product}/>
      <b>Description:</b> <br></br>
      <div style={descStyle} className="description">
        <p>{product.description}</p>
      </div>
  
    </div>
    </div>
    <ProductList similarItems="true" header="Similar Products" products={products} />
    <Accordion items={[{title: "blah blah blah blah?", content:"blahblahblah blah blah blah blah"},{title: "blah blah blah blah?", content:"blahblahblah blah blah blah blah"}]} heading="Frequently Asked Questions"/>
  </div>       
    );
}; //End of ProductDetails component

const mapPropsToState = (state,ownProps) =>{
    console.log(ownProps.match);
    console.log("---",ownProps.match.params.id);
    console.log(state.products);

    const id = ownProps.match.params.id;
    const pro = state.products.find(el=>el.id.toString() === id );
    const similarPro = state.products.filter(el=>el.category === pro.category );
    
    console.log("---",pro);
    return{
        product: pro,
        products: similarPro
    }
}
export default connect(mapPropsToState)(ProductDetails);
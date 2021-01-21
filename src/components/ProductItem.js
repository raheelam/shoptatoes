import React from 'react';

const ProductItem = ({price, children}) => {
    return(
    <div className=" ui card ">
    <div className="center aligned">
  <a className="image" href="#">
    <img width="170px"src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>
  </a>
  <p>$100</p>
  </div>
  <div className="content">
     <div className="center aligned">
    <a className="header" href="#">Product Name</a><br></br>
    <span>color</span>
    </div>
    <div className="meta">
    <div className="small ui left labeled button" tabindex="0">
  <a className="small ui basic label">
    Add to cart
  </a>
  <div className=" small ui icon button">
    <i >+</i>
  </div>
</div>
      
      <a className="small ui primary button right floated ">Add to cart</a>
    </div>
  </div>
</div>

    );
}

export default ProductItem;
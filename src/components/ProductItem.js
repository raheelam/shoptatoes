import React from 'react';

const ProductItem = ({price, name}) => {
    return(
    <div className ="column">
    <div className=" ui fluid card ">
    <div className="center aligned">
  <a className="image" href="#">
    <img width="170px"src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>
  </a>
  <p>{price}</p>
  </div>
  <div className="content">
     <div style={{marginBottom:"18px"}} className="center aligned">
    <a className="header" href="#">{name}</a><br></br>
    <span >color</span>
    </div>
    <div className="meta">
    <div className="small ui left labeled button" tabindex="0">
  <a className="small ui basic label">
    Add to cart
  </a>
  <div className=" small ui icon button">
    <i className="ui icon plus"></i>
  </div>
</div>
      
      <a className="small ui primary button right floated ">Buy now</a>
    </div>
  </div>
</div>
</div>

    );
}

export default ProductItem;
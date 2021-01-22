import React from 'react';
const imgStyle = {
  width: "70%",
  width: "65%"

}
const ProductItem = ({price, name}) => {
    return(
    <div className =" column">
    <div className=" ui fluid card ">
    <div style={{padding:"60px 10px", background:"grey",position:"relative"}} className="center aligned">
  <a className="image" href="#">
    <img style={imgStyle} src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>
  </a>
  <p className="left floated" style={{position: "absolute", left:"0",bottom: "16px", background: "white",paddingRight:"16px"}}>&#36;{price}</p>
  </div>
  <div className="content">
     <div style={{marginBottom:"18px"}} className="center aligned">
    <a className="header" href="#">{name}</a><br></br>
    <span >color</span>
    </div>
    <div className="meta">
    <div className="tiny ui left labeled button" tabindex="0">
  <a className="ui basic label">
    Add to cart
  </a>
  <div className="tiny  ui icon button">
    <i className="ui icon plus"></i>
  </div>
</div>
      
      <a className={`tiny ui primary button ${window.innerWidth>1200?"right floated":" "} `}>Buy now</a>
    </div>
  </div>
</div>
</div>

    );
}

export default ProductItem;
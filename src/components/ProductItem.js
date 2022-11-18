import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import {
  imgStyle,
  noWrap,
  noOverflow,
  priceStyle,
  topDivStyle,
} from './productItemStyles';

const ProductItem = ({
  price,
  name,
  id,
  image,
  rating,
  store,
  sliderClass,
}) => {
  return (
    <div
      className={`column ${sliderClass}`}
      style={{ width: sliderClass === '' ? '13rem' : '86vw' }}
    >
      <div className=" ui fluid card ">
        <Link to={`/product/${id}`}>
          <div style={topDivStyle} className="center aligned">
            <div className={`image`}>
              <img alt={name} style={imgStyle} src={image} />
            </div>
            <p className="left floated" style={priceStyle}>
              {' '}
              &#8358; {price}{' '}
            </p>
          </div>
        </Link>

        <div className="content">
          <div style={noOverflow} className="">
            <Link style={noWrap} className="header" to={`/product/${id}`}>
              {name}
            </Link>
            <br></br>
            <span>
              <Rating rating={rating} />
            </span>
          </div>
          <div style={noOverflow} className="meta">
            <p style={noWrap}>{store}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

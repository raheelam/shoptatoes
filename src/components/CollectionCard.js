import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { noWrap, noOverflow } from './productItemStyles';
import styled from 'styled-components';

const CollectionCard = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid lightgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  &:hover {
    background: rgba(247, 235, 212, 0.1);
  }
`;

const CollectionItem = ({
  price,
  name,
  id,
  image,
  rating,
  store,
  sliderClass,
  className,
  ...others
}) => {
  return (
    <CollectionCard className={`${sliderClass} ${className}`} {...others}>
      <Link to={`/product/${id}`}>
        <div
          style={{ padding: '1rem 1rem 1rem  1rem', position: 'relative' }}
          className="center aligned"
        >
          <img
            alt={name}
            style={{ objectFit: 'cover', width: '100%', height: '115px' }}
            src={image}
          />
        </div>
      </Link>

      <div className="content">
        <div style={{ ...noOverflow, textAlign: 'center' }} className="">
          <Link style={noWrap} className="header " to={`/product/${id}`}>
            {name}
          </Link>
          <br></br>
          <span>
            <Rating rating={rating} />
          </span>
        </div>

        <button
          style={{
            width: 'calc(100% + 1px)',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            marginLeft: '-0.5px',
            padding: '0.8rem 0.5rem',
            marginTop: '1rem',
            background: 'black',
            color: 'white',
            border: '1px solid black',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          view collection
        </button>
      </div>
    </CollectionCard>
  );
};

export default CollectionItem;

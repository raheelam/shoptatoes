import React from 'react';
import Rating from './Rating';
import ReviewCard from './ReviewCard';

import { useMediaPredicate } from 'react-media-hook';
import { setSlider, plusSlides } from '../util/slider';

const CustomerReviews = () => {
  const lessThan540 = useMediaPredicate('(max-width: 540px)');
  const displayReviews = (ms) => {
    let reviews = [];
    for (let i = 0; i < 3; i++) {
      reviews.push(<ReviewCard sliderClass={ms} key={i} />);
    }
    console.log(reviews);
    return reviews;
  };
  return (
    <div style={{ padding: '50px 0px' }} className="center aligned">
      <h1 style={{ marginBottom: '50px' }} className="ui header centered">
        Customer Reviews
        <span className="sub header">
          <Rating rating="5" />
        </span>
      </h1>

      {!lessThan540 && (
        <div
          style={{
            // width: '80%',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}
          // className="ui four columns grid center aligned"
        >
          {displayReviews('')}
        </div>
      )}

      {lessThan540 && (
        <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              // width: '80%',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            {displayReviews('reviewSlider')}
          </div>

          {setSlider('reviewSlider')}
          <i
            className="left arrow icon"
            onClick={() => {
              plusSlides(-1, 'reviewSlider');
            }}
          ></i>
          <i
            className="right arrow icon"
            onClick={() => {
              plusSlides(1, 'reviewSlider');
            }}
          ></i>
        </div>
      )}
    </div>
  );
};
export default CustomerReviews;

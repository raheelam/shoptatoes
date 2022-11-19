import React from 'react';
import Rating from './Rating';

const ReviewCard = ({ sliderClass }) => {
  return (
    <div
      style={{ width: sliderClass == '' ? '16rem' : '90%', margin: 0 }}
      className={`ui card ${sliderClass} centered`}
    >
      <div className="content">
        <div className="center aligned header">
          <Rating rating="4" />
        </div>
        <div className="center aligned description">
          <p style={{ whiteSpace: 'pre-wrap' }}>
            review bla blah blah blah blah blah blah blah blah blah bla blah
            blah blah blah blah blah blah blah blah blah blah blah blah bblah
            blah blah blah blah
          </p>
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <img
            alt="r"
            className="ui massive avatar image"
            src="https://cdn.onlinewebfonts.com/svg/img_210318.png"
          />

          <p>Jenny</p>
          <p>19.5.2021</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

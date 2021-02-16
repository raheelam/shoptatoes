import React from 'react';
import Rating from './Rating';

const ReviewCard = () =>{
    return(
        <div className="ui card">
        <div className="content">
          <div className="center aligned header"><Rating rating="4" /></div>
          <div  className="center aligned description">
            <p style={{whiteSpace:"pre-wrap"}}>review bla blah blah blah blah blah blah blah blah blah bla blah blah blah blah blah blah blah blah blah blah blah blah blah bblah blah blah blah blah</p>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img className="ui massive avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/>
            <p>Jenny</p>
            <p>19.5.2021</p>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;
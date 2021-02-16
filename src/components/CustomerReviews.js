import React from 'react';
import Rating from './Rating';
import ReviewCard from './ReviewCard';

const CustomerReviews = () => {
    return(
        <div style={{padding:"50px 0px"}} className="center aligned" >
            <h1 style={{marginBottom:"50px"}} className="ui header centered">
            Customer Reviews
            <span className="sub header"><Rating rating="5" /></span>
            </h1>
            <div style={{ maxWidth:"80%", margin:"0px auto" , overflowX:"scroll"}} className="ui grid ">
            
                <div   className="five wide column">
                    <ReviewCard />
                </div>
                <div   className=" five wide column">
                    <ReviewCard />
                </div>
                <div  className="five wide column">
                    <ReviewCard />  
                </div>
            </div>
        </div>
    );

};
export default CustomerReviews;
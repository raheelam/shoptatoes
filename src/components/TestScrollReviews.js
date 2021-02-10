import React from 'react';
import Rating from './Rating';
import ReviewCard from './ReviewCard';

const TestScrollReviews = () => {
    return(
        <div style={{padding:"50px 0px"}} className="center aligned" >
            <h1 style={{marginBottom:"50px"}} className="ui header centered">
            Customer Reviews
            <span className="sub header"><Rating rating="5" /></span>
            </h1>
            <div style={{ width:"80%", height:"250px", margin:"0px auto" , overflowX:"scroll", whiteSpace:"nowrap"}} className="ui grid">
            
                <div   className="five wide column">
                    <ReviewCard />
                </div>
                <div   className=" five wide column">
                    <ReviewCard />
                </div>
                <div  className="five wide column">
                    <ReviewCard />  
                </div>
                <div  className="five wide column">
                    <ReviewCard />  
                </div>
                <div  className="five wide column">
                    <ReviewCard />  
                </div>
            </div>
        </div>
    );

};
export default TestScrollReviews;
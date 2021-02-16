import React from 'react';

const Section3 = () => {
    return(
        <div  style={{padding:"20px 0px"}} className="center aligned" >
            <h1 style={{marginBottom:"50px"}} className="ui header centered">
            Wooden Slides
            <span className="sub header">slides</span>
            </h1>
            <div className="ui grid ">
            
                <div style={{padding:"0px", height: "500px"}}  className="eight wide column">
                    <img style={{height: "500px",width:"100%", display: "block"}}  alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                    <div style={{position: "relative", bottom: "20%", textAlign:"center"}}>
                    <button style={{opacity:"0.7", margin:"0px 5px", width:"40%"}} className="ui huge button">Add to cart</button>
                    <button style={{opacity:"0.7", margin:"0px 5px", width:"40%"}}  className="ui huge button">Buy Now</button>
                    </div>
                </div>
                <div style={{padding:"0px"}}  className="eight wide column">
                    <img style={{height: "250px", width:"100%", display: "block"}} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                    <img style={{height: "250px" , width:"100%", display: "block"}} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                </div>
            </div>
        </div>
    );

};
export default Section3;
import React from 'react';

const Section3 = () => {
    return(
        <div className="center aligned" >
            <h1 style={{marginBottom:"70px"}} className="ui header centered">
            Wooden Slides
            <span className="sub header">slides</span>
            </h1>
            <div className="ui grid ">
            
                <div style={{padding:"0px"}} className="eight wide column">
                    <img style={{height: "600px",width:"100%"}}  alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                </div>
                <div style={{padding:"0px"}}  className="eight wide column">
                    <img style={{height: "300px", width:"100%", display: "block"}} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                    <img style={{height: "300px" , width:"100%", display: "block"}} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                </div>
            </div>
        </div>
    );

};
export default Section3;
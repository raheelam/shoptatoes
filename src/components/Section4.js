import React from 'react';

const imgStyle={width:"100%", height:"250px", borderRadius: "10px"};
const Section4 = () => {
    return(
       <div style={{marginBottom:"50px"}} className="ui container ">
            <h1 style={{marginBottom:"50px"}} className="ui header centered">
            INTERIOR DESIGNS WE LOVE <i style={{display:"inline"}} className="tiny heart outline icon "></i>
            <span className="sub header"></span>
            </h1>
            <div  className="ui four columns grid ">
            
                <div className="column">
                    <img  style={imgStyle} alt="section4" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>
                </div>
                <div   className=" column">
                    <img style={imgStyle} alt="section4" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />
                </div>
                <div  className=" column">
                    <img style={imgStyle} alt="section4" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />  
                </div>
                <div  className=" column">
                    <img style={imgStyle} alt="section4" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg" />  
                </div>
            </div>
        </div>
       
    );

};
export default Section4;
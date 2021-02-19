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
                    <img  style={imgStyle} alt="section4" src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571452.jpg&fm=jpg"/>
                </div>
                <div   className=" column">
                    <img style={imgStyle} alt="section4" src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?cs=srgb&dl=pexels-curtis-adams-3773571.jpg&fm=jpg" />
                </div>
                <div  className=" column">
                    <img style={imgStyle} alt="section4" src="https://images.pexels.com/photos/6283838/pexels-photo-6283838.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6283838.jpg&fm=jpg" />  
                </div>
                <div  className=" column">
                    <img style={imgStyle} alt="section4" src="https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?cs=srgb&dl=pexels-rachel-claire-4846455.jpg&fm=jpg" />  
                </div>
            </div>
        </div>
       
    );

};
export default Section4;
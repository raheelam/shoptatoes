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
                    <img style={{height: "500px",width:"100%", display: "block"}}  alt="HOME" src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?cs=srgb&dl=pexels-pixabay-534172.jpg&fm=jpg" />
                    <div style={{position: "relative", bottom: "20%", textAlign:"center"}}>
                    <button style={{opacity:"0.7", margin:"0px 5px", width:"40%"}} className="ui huge button">Add to cart</button>
                    <button style={{opacity:"0.7", margin:"0px 5px", width:"40%"}}  className="ui huge button">Buy Now</button>
                    </div>
                </div>
                <div style={{padding:"0px"}}  className="eight wide column">
                    <img style={{height: "250px", width:"100%", display: "block"}} alt="HOME" src="https://images.pexels.com/photos/6284230/pexels-photo-6284230.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6284230.jpg&fm=jpg" />
                  { /* <img style={{height: "250px" , width:"100%", display: "block"}} alt="HOME" src="https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457841.jpg&fm=jpg" /> 
                  
                  */}
                  <img style={{height: "250px", width:"100%", display: "block"}} alt="HOME" src="https://images.pexels.com/photos/2564116/pexels-photo-2564116.jpeg?cs=srgb&dl=pexels-hemanth-nirujogi-2564116.jpg&fm=jpg" />
                </div>
            </div>
        </div>
    );

};
export default Section3;
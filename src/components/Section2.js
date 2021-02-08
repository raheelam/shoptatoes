import React from 'react';


const img1 =  {
    display: "block",
    position: "relative",
    top: "0px",
left: "0px",
width:"65%",
height: "300px",
margin: "0px",
padding: "0px"

}

const img2 = {
    display: "block",
    position: "relative",
    top: "-150px",
left: "25%",
width:"65%",
height: "290px"
//background: "transparent url('img/bg.png') 0% 0% no-repeat padding-box",

}

const Section2 = () =>{
    return(
        <div  className = "ui grid ">
            <div style={{paddingBottom: "0px"}}  className="eight wide column">
            <div style={{maxWidth: "70%", margin:"0px auto"}} >
                <h2>You want a pitball & slides For the kids</h2>
                <p>It’s not just about quality. Although we guarantee quality that’s 
                second to none – these are the originals. It’s about style and design.
                 You need modern colour selection to go with your space, and gorgeous 
                 design to fit your taste. For the kids. And why not have the kids grow 
                 up with great taste, too? </p>
                <p> When you have kids, you want the toys you wish 
                 you could have had. And now you can. We promise you the world’s best ball 
                 its and slides.</p>
                 <p> And you’re free to share them with your children, too.</p>
                <button className="ui tiny button primary">Shop now</button>
            </div>
            </div>
            <div style={{marginBottom: "-140px"}} className="eight wide column">
               <div style={{maxWidth:"90%", margin:"0px auto"}}>
               <img style={img1} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>
               <img style={img2} alt="HOME" src="https://static.demilked.com/wp-content/uploads/2016/10/nikon-small-world-photo-contest-2016-16.jpg"/>

              

               </div>
              
            </div>
        </div>
    );

}; 

export default Section2;
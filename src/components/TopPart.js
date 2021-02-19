import React from 'react';

const TopPart = () =>{
    return(
        <div className = "ui grid" >
            <div className="eight wide column" style={{paddingTop: "0px"}}>
                <img style={{width: "100%", height: "350px"}} alt="HOME" src="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1668860.jpg&fm=jpg"/>
            </div>
            <div className="eight wide column center aligned middle aligned">
               <div>
               <h1>Modern ball pits</h1>
                <p>ftstrss gdtgdds tdtddtd tgdgd</p>
                <button className="ui tiny button primary">Shop now</button>

               </div>
              
            </div>
        </div>
    );

};

export default TopPart;
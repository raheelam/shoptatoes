import React from 'react';
import {useMediaPredicate} from "react-media-hook";



const dropdown = () =>{
    
    const dmenu = document.querySelector(".d.menu");
    const uidrp = document.querySelector(".ui.d");
    uidrp.style.position = "absolute";
    uidrp.style.right = "0";
    uidrp.style.top = "0";
    uidrp.style.background = "white";
    uidrp.style.borderLeft = "3px solid white";
    dmenu.hidden? dmenu.hidden=false : dmenu.hidden=true;

    
}

const Header = () =>{
    const lessThan540 = useMediaPredicate("(max-width: 540px)");
    return(
        
        <div className="ui secondary pointing menu ">
        {   lessThan540 &&
            <React.Fragment>
            <div className="left menu">
            <a href="#" className="item header">Shoptatoes</a>
            </div>

            <div className="right menu item">
            
   <div onClick={dropdown} className="ui d">
    <i  className=" justify align icon"></i>
    <div hidden className="d menu">
      <a className="item" dataValue="idk">Electronics</a>
      <a className="item">Automotive</a>
      <a className="item">Home</a>
    </div>
    
  
</div>

            </div>

            
            </React.Fragment>
            
        }
        { !lessThan540 &&
        <React.Fragment>
        <div className="left menu">
            <a href="#" className="item">Ball Pits</a>
            <a href="#" className="item">Balls</a>
            <a href="#" className="item">Decor</a>
            <a href="#" className="item">Play</a>
            <a href="#" className="item">Slides</a>
        </div>
        
            
        
        <div className="right menu">
          <a href="#" className="item">
            Blogs
          </a>
          <a href="#" className="item">
            Gift Cards
          </a>
          <a href="#" className="item">
            Cart
          </a>
          
          
        </div>
        </React.Fragment>
        }
      </div>
      
    );

};


export default Header;
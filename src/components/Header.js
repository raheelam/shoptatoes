import React from 'react';
import {useMediaPredicate} from "react-media-hook";
import { Link } from 'react-router-dom';



const dropdown = () =>{
    
    const dmenu = document.querySelector(".d.menu");
    const uidrp = document.querySelector(".ui.d");
    uidrp.style.position = "absolute";
    uidrp.style.right = "0";
    uidrp.style.top = "0";
    uidrp.style.background = "white";
    uidrp.style.zIndex = "999";
    uidrp.style.borderLeft = "3px solid white";
    
    if(dmenu.hidden){
         dmenu.hidden=false;
         uidrp.style.boxShadow = "5px 10px 18px #8888";
    } else{ 
        dmenu.hidden=true;
        uidrp.style.boxShadow = "none";
    }


    
}

const Header = () =>{
    const lessThan540 = useMediaPredicate("(max-width: 540px)");
    return(

        
        <div className="ui secondary pointing menu ">
        <div className="left menu">
            <Link to="/" className="item header">Shoptatoes</Link>
            </div>
        {   lessThan540 &&
            <React.Fragment>
            

            <div className="right menu item ">
            
   <div onClick={dropdown} className="ui d">
    <i  className=" justify align icon"></i>
    <div hidden className="d menu">
      <a className="item" >balls</a>
      <a className="item">Automotive</a>
      <a className="item">Home</a>
      <a href="#" className="item">Decor</a>
      <a href="#" className="item">Play</a>
      <a href="#" className="item">Slides</a>
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
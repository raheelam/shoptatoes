import React from "react";
import {useMediaPredicate} from "react-media-hook";

const Footer = () => {
    const lessThan500 = useMediaPredicate("(max-width: 500px)");
    return(
    <div style={{background:"grey"}} className ="ui section  " >
        <div class="ui  grid centered container ">
  <div class=" column row  "  >
  { !lessThan500 &&
    <div class=" four wide column">
      <h3 className="ui header">Shoptatoes</h3>
      <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>

    </div>
  }
    <div className={`${lessThan500?"six":"four"} wide column`}>
      <h3 className="ui header">Customer care</h3>
      <div>
          <p>Frequently asked questions</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
      </div>
    </div>
    <div className={`${lessThan500?"six":"four"} wide column`}>
      <h3 className="ui header ">Company information</h3>
      <p>HELLO</p>
          <p>HELLO there there</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO heet hehe ehhr</p>
          <p>HELLO</p>
          <p>HELLO</p>
    </div>
    <div class="four wide column">
      <h3 className="ui header">Follow Us</h3>
      <i  className="large ui icon instagram "></i>
      <i  className="large ui icon twitter"></i>
      <i className="large ui icon facebook"></i>
    </div>
  </div>
</div>
</div>
    );
}

export default Footer;
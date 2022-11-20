import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const dropdown = () => {
  const dmenu = document.querySelector('.d.menu');
  const uidrp = document.querySelector('.ui.d');
  uidrp.style.position = 'absolute';
  uidrp.style.right = '0';
  uidrp.style.top = '0';
  uidrp.style.background = 'white';
  uidrp.style.zIndex = '999';
  uidrp.style.borderLeft = '3px solid white';

  if (dmenu.hidden) {
    dmenu.hidden = false;
    uidrp.style.boxShadow = '5px 10px 18px #8888';
  } else {
    dmenu.hidden = true;
    uidrp.style.boxShadow = 'none';
  }
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white !important;
  width: 100vw;
  height: 46px;
  .desktop-menu {
    @media only screen and (max-width: 640px) {
      display: none !important;
    }
  }
`;

const MobileMenu = styled.div`
  @media screen and (min-width: 641px) {
    display: none !important;
  }
`;
const Header = () => {
  return (
    <HeaderWrapper className="ui secondary pointing menu ">
      <div className="left menu">
        <Link to="/" className="item header">
          Bodu
        </Link>
      </div>
      <MobileMenu className="right menu item ">
        <div onClick={dropdown} className="ui d">
          <i className=" justify align icon"></i>
          <div hidden className="d menu">
            <a href="/" className="item">
              balls
            </a>
            <a href="/" className="item">
              Automotive
            </a>
            <a href="/" className="item">
              Home
            </a>
            <a href="/" className="item">
              Decor
            </a>
            <a href="/" className="item">
              Play
            </a>

            <Link to="/shop" className="item">
              Shop
            </Link>
          </div>
        </div>
      </MobileMenu>

      <React.Fragment>
        <div className="left menu desktop-menu">
          <a href="/" className="item">
            Ball Pits
          </a>
          <a href="/" className="item">
            Balls
          </a>
          <a href="/" className="item">
            Decor
          </a>
          <a href="/" className="item">
            Play
          </a>
          <Link to="/shop" className="item">
            Shop
          </Link>
        </div>

        <div className="right menu desktop-menu">
          <a href="/" className="item">
            Blogs
          </a>
          <a href="/" className="item">
            Gift Cards
          </a>
          <a href="/" className="item">
            Cart &nbsp;
            <i className="ui icon shopping bag"></i>
          </a>
        </div>
      </React.Fragment>
    </HeaderWrapper>
  );
};

export default Header;

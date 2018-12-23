// React libraries and 3rd party libraries
import React from 'react';

// Custom imports
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => 
  <header className="header" >
    <div className="header_page-limiter">
      <div className="profile" >
        <Logo />
        <h1 className="profile_headline">Delivery Weather</h1>
      </div>
        <Navigation />
    </div>
  </header>

export default Header;
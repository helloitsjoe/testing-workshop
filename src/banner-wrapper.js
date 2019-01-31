import React from 'react';

const BannerWrapper = ({ children, name }) => (
  <div>
    <h1 data-enzyme-id='BANNER'>
      {name ? `Welcome, ${name}!` : `Please enter your name`}
    </h1>
    {children}
  </div>
);

export default BannerWrapper;

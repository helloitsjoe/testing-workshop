import React from 'react';

const BannerWrapper = ({ children, text }) => (
  <div>
    <h1 data-enzyme-id='BANNER'>{text}</h1>
    {children}
  </div>
);

export default BannerWrapper;

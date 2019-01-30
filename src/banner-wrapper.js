import React from 'react';

const BannerWrapper = ({ children, bannerText }) => (
  <div>
    <h1 data-enzyme-id="BANNER">{bannerText}</h1>
    {children}
  </div>
);

export default BannerWrapper;

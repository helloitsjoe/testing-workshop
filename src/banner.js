import React from 'react';

const Banner = ({ name }) => (
  <h1 data-enzyme-id='BANNER'>
    {name ? `Welcome, ${name}!` : `Please enter your name`}
  </h1>
);

export default Banner;

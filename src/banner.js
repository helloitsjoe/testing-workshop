import React from 'react';

const Banner = ({ name }) => {
  return <h1 data-testid="banner">{name ? `Welcome, ${name}!` : 'Please enter your name'}</h1>;
};

export default Banner;

import { useLocation } from 'react-router-dom';
import React from 'react';
import HeaderRouter from '../components/Header/Header';

const AboutUs = () => {
  const location = useLocation();
  if (location) {
    const nameUrl = location.pathname.slice(1);
    return (
      <div data-testid="about-link">
        <HeaderRouter title={nameUrl} />
        <h1>About Us</h1>
      </div>
    );
  }
  return (
    <div data-testid="about-link">
      <HeaderRouter title="Not Found" />
      <h1>Not Found</h1>
    </div>
  );
};

export default AboutUs;

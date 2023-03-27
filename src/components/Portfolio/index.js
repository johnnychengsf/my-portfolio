import React from 'react';
import Project from '../Project';
import './style.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="image-container">
        <Project
          imageSrc={require('../../images/project-hkia.jpg').default}
          altText="HKIA"
        />
        <Project
          imageSrc={require('../../images/project-mtr.png').default}
          altText="MTR"
        />
      </div>
    </div>
  );
}

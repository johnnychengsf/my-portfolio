import React from 'react';
import { saveAs } from 'file-saver';
import myAvatar from '../../images/my-avatar.png';
import './style.css';

export default function Resume() {

  const handleClick = () => {
    const proficiencies = `
Front-end Proficiencies
- HTML
- CSS
- JavaScript
- JQuery
- Responsive design
- React
- Bootstrap

Back-end Proficiencies
- APIs
- Node
- Express
- MySQL Sequlize
- MongoDB, Mongoose
- REST
- GraphQL
`;

    const blob = new Blob([proficiencies], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'resume.txt');
  };
  return (
    <div>
      <div className="resume">
        <h1>Resume</h1>
        <div>
          <button onClick={handleClick}>Download my resume</button>
        </div>
        <div>
          <img src={ myAvatar} alt="Me" />
          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL Sequlize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

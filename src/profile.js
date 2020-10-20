import React from 'react';

import './style.css';

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>Hariprasad Gangavaram</p>
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly', fontSize: '75%'}}>
          <a href="https://github.com/Ayudh/" target="__blank"><i className="fa fa-github"></i></a>
          <a href="http://ayudh.github.io/" target="__blank"><i className="fa fa-globe"></i></a>
          <a href="https://www.linkedin.com/in/harig81189/" target="__blank"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    );
  }
}
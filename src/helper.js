import React from 'react';

import './style.css';

export class Helper extends React.Component {
  render() {
    return (
      <div className="helper">
        Use ⬅️ or ➡️ to navigate
        <br/>
        Option/Ctrl + P : Presentation Mode
        <br/>
        Option/Ctrl + O : Overview Mode
        <br/>
        Option/Ctrl + G : Grid Mode
      </div>
    );
  }
}
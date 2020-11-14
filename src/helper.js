/* eslint-disable */
import React from 'react';

import './style.css';

export class Helper extends React.Component {
  render() {
    return (
      <div className="helper">
        Use ⬅️ or ➡️ to navigate
        <br/>
        option/alt + P : Presentation Mode
        <br/>
        option/alt + O : Overview Mode
        <br/>
        option/alt + G : Grid Mode
      </div>
    );
  }
}
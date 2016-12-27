import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='div'>
        aa
        <div className='div'>
          bb
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

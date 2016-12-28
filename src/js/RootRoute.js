import React, { Component } from 'react';

export default class Root extends Component {
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

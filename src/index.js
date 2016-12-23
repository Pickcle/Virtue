import React, { Component } from 'react';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='div'>aa</div>
    );
  }
}

React.render(
  <Root/>,
  document.getElementById('app')
);

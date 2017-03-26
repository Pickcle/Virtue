/**
 * 首页
 * Author: xiaohj
 * Date: 2017.1.5
 */
import React, { Component } from 'react';

import './main.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  onChopClick = () => {
    location.href = 'http://www.pickcle.com/virtue/index.html#/chop'
  }

  render() {
    return (
      <div className='home-title'>
        <button onClick={this.onChopClick}>chopList</button>
      </div>
    )
  }
}

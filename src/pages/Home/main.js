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

  onButtonClick = () => {
    window.location.href = 'http://localhost:8081/#/yao-categorylist/b2c/10001'
  }

  render() {
    return (
      <div className='home-title'>
        <button onClick={this.onButtonClick}>category-list</button>
      </div>
    )
  }
}

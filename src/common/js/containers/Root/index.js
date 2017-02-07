/**
 * 根容器
 * Author: xiaohj
 * Date: 2017.2.5
 */
import React, { Component } from 'react';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

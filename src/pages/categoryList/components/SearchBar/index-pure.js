/**
 * 分类列表页上方搜索框，其实只是跳转用的按钮
 * Author: xiaohj
 * Date: 2017.2.15
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   return nextProps.text !== this.props.text;
  // }

  render() {
    return (
      <div className='category-search-button-container'>
        <div className='category-search-button'>
          <div className='category-search-button-border' onClick={this.props.onBtnClick}>
            <i className='category-search-icon icon icon-search'/>
            <span className='category-search-button-text'>{this.props.text}</span>
          </div>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

/**
 * 分类列表页左边单个一级类目
 * Author: xiaohj
 * Date: 2015.2.17
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CategoryDirectoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isSelect, onItemClick, dataLevel1 } = this.props;
    return (
      <div className='category-directory-item' onClick={onItemClick}>
        <div className='category-directory-item-line'/>
        <span className={'category-directory-item-text' + (isSelect ? ' select' : '')}>{dataLevel1.name}</span>
      </div>
    )
  }
}

CategoryDirectoryItem.propTypes = {
  //点击一级类目的回调
  onItemClick: PropTypes.func,
  //当前一级类目是否选中
  isSelect: PropTypes.bool,
  //一级类目数据
  dataLevel1: PropTypes.object
}

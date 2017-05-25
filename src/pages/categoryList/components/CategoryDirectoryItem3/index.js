/**
 * 分类列表页三级类目
 * Author: xiaohj
 * Date: 2015.2.17
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LazyLoadImage from 'common/js/components/LazyLoadImage';
import Util from 'src/common/js/Util.js';

import './style.scss';

export default class CategoryDirectoryItem3 extends Component {

  // shouldComponentUpdate (nextProps, nextState) {
    // return nextProps.dataLevel3 !== this.props.dataLevel3;
  // }

  render() {
    const { itemWidth, dataLevel3 } = this.props;
    const heightPx = itemWidth + 45 + 'px';
    const itemWidthPx = itemWidth + 'px';
    return (
      <div className='category-directory-item3' style={{height: heightPx}}>
        <div className='category-directory-item3-content'>
          <div style={{width: itemWidthPx, height: itemWidthPx}}>
            <img src={Util.getTfsImg(null, dataLevel3.img, itemWidth * 2)} />
          </div>
          <div className='category-directory-item3-text flex'>{dataLevel3.name}</div>
        </div>
      </div>
    )
  }
}

CategoryDirectoryItem3.propTypes = {
  //每个三级类目dom的宽度
  itemWidth: PropTypes.number,
  //渠道类型
  bizType: PropTypes.string,
  //三级类目数据
  dataLevel3: PropTypes.object
}

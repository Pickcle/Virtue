/**
 * 分类列表页二级类目
 * Author: xiaohj
 * Date: 2015.2.17
 */
import React, { Component, PropTypes } from 'react';

import CategoryDirectoryItem3 from '../CategoryDirectoryItem3';
import './style.scss';

export default class CategoryDirectoryItem2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemWidth, dataLevel2, bizType } = this.props;
    const domsLevel3 = [];
    const childrenLevel2 = dataLevel2.children || [];
    childrenLevel2.map((value, key) => {
      let dom = <CategoryDirectoryItem3 key={key} index={key} dataLevel3={value} itemWidth={itemWidth} bizType={bizType}/>
      domsLevel3.push(dom);
    })
    return (
      <div className='category-directory-item2'>
        <div className='category-directory-item2-text'>{dataLevel2.name}</div>
        <div className='category-directory-item3-container'>
          {domsLevel3}
        </div>
      </div>
    )
  }
}

CategoryDirectoryItem2.propTypes = {
  //每个三级类目dom的宽度
  itemWidth: PropTypes.number,
  //渠道类型
  bizType: PropTypes.string,
  //二级类目数据
  dataLevel2: PropTypes.object
}

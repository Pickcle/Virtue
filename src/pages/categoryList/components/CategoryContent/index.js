/**
 * 分类列表页右边内容
 * Author: xiaohj
 * Date: 2017.2.17
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryDirectoryItem2 from '../CategoryDirectoryItem2';

import Util from 'src/common/js/Util.js';

import './style.scss';

export default class CategoryContent extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(Util.isArrayEqual(nextProps.selectedDatasLevel2, this.props.selectedDatasLevel2));
  }

  componentDidUpdate(prevProps, prevState) {
    this.contentDom.scrollTop = 0;
  }

  render() {
    const { height, width, selectedDatasLevel2, bizType } = this.props;
    const itemWidth = Math.floor((width - 58) / 3);
    const heightPx = height + 'px';
    const widthPx = width + 'px';
    const domsLevel2 = [];
    selectedDatasLevel2.map((value, key) => {
      let dom = <CategoryDirectoryItem2 key={key} dataLevel2={value} itemWidth={itemWidth} bizType={bizType}/>
      domsLevel2.push(dom);
    })

    return (
      <div className='category-content' style={{height: heightPx, width: widthPx}} ref={(ref) => {this.contentDom = ref}}>
        <div className='category-content-advertisement'/>
        {domsLevel2}
      </div>
    )
  }
}

CategoryContent.propTypes = {
  //dom总高度
  height: PropTypes.number.isRequired,
  //dom总宽度
  width: PropTypes.number.isRequired,
  //渠道类型
  bizType: PropTypes.string,
  //二级类目数组
  selectedDatasLevel2: PropTypes.array
}

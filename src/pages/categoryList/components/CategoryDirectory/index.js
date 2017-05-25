/**
 * 分类列表页左边一级类目
 * Author: xiaohj
 * Date: 2017.2.17
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryDirectoryItem from '../CategoryDirectoryItem';
import Util from 'src/common/js/Util.js';

import './style.scss';

export default class CategoryDirectory extends Component {
  constructor(props) {
    super(props);

    //每个一级类目商品dom的高度
    this.itemHeight = 56;

    //是否需要一级类目滚动到选中位置
    this.needDefaultScroll = false;
  }

  componentWillMount() {
    this.needDefaultScroll = this.props.needDefaultScroll || false;
  }

  componentDidMount() {
    if (this.props.datasLevel1 && this.props.datasLevel1.length > 0) {
      if (this.needDefaultScroll) {
        //只需要在返回时做一次滚动，之后的更新不需要滚动
        this.needDefaultScroll = false;

        //滚动到选中的tab位置
        this.directoryDom.scrollTop = this.itemHeight * this.props.curIndex;
      } else {
        this.directoryDom.scrollTop = 0;
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(Util.isArrayEqual(nextProps.datasLevel1, this.props.datasLevel1)
        && nextProps.curIndex == this.props.curIndex);
  }

  onItemClick(index) {
    const { curIndex } = this.props;
    if (curIndex == index) {
      return;
    }

    if (this.props.onDirectoryItemClick) {
      this.props.onDirectoryItemClick(index);
    }
  }

  render() {
    const { curIndex, datasLevel1 } = this.props;
    const domsLevel1 = [];
    datasLevel1.map((value, key) => {
      let isSelect = false;
      if (key == curIndex) {
        isSelect = true;
      }
      const dom = <CategoryDirectoryItem key={key} dataLevel1={value} onItemClick={this.onItemClick.bind(this, key)} isSelect={isSelect}/>
      domsLevel1.push(dom);
    })
    const height = this.props.height + 'px';
    const selectLineTop = curIndex * this.itemHeight + 'px';
    return (
      <div className='category-directory' style={{height: height}} ref={ref => this.directoryDom = ref}>
        {domsLevel1}
        <div className='category-directory-select' style={{top: selectLineTop}}/>
      </div>
    )
  }
}

CategoryDirectory.propTypes = {
  //dom总高度
  height: PropTypes.number.isRequired,
  //当前选中的一级类目的index
  curIndex: PropTypes.number.isRequired,
  //点击一级类目回调
  onDirectoryItemClick: PropTypes.func,
  //一级类目数组
  datasLevel1: PropTypes.array,
  //是否需要滚动到选中位置
  needDefaultScroll: PropTypes.bool
}

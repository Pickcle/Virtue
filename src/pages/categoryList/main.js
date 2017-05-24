/**
 * 分类列表页
 * Author: xiaohj
 * Date: 2017.2.15
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import TopBar from 'common/js/components/TopBar';
import SearchBar from './components/SearchBar';
import CategoryDirectory from './components/CategoryDirectory';
import CategoryContent from './components/CategoryContent';

import * as Actions from './action.js';
import store from 'src/store.js';

import './main.scss';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    //标题
    this.pageTitle = '分类列表';

    //是否需要一级类目滚动到选中位置
    this.needDefaultScroll = false;

    //根id
    this.rootId = this.props.params.rootId;

    //一级类目id
    this.idLevel1 = this.props.params.idLevel1;

    //渠道类型
    this.bizType = this.props.params.bizType;

    //搜索框处理函数
    // this.onSearchClick = this.onSearchClick.bind(this);

    //点击返回处理函数
    // this.onReturnClick = this.onReturnClick.bind(this);

    //点击一级类目处理函数
    // this.onDirectoryItemClick = this.onDirectoryItemClick.bind(this);
  }

  componentWillMount() {
    const { curIndex } = this.props.yao_categoryList;

    this.needDefaultScroll = !RouteHelper.isGoto;

    //进入了新id的分类列表页
    if (!this.needDefaultScroll) {
      // this.props.dispatch(Actions.clearState());
      this.props.Actions.clearState();
    }

  }

  componentDidMount() {

    this.needDefaultScroll = false;

    const { curIndex } = this.props.yao_categoryList;

    if (RouteHelper.isGoto) {
      if (!this.idLevel1) {
        //如果是进入页面，默认选中第一个一级类目
        // this.props.dispatch(Actions.categoryChangeSelectIndex(0));
        this.props.Actions.categoryChangeSelectIndex(0);

        //请求第一个一级类目的数据
        // this.props.dispatch(Actions.getFrontCategory(this.rootId));
        this.props.Actions.fakeGetFrontCategory(this.rootId);
      } else {
        // this.props.dispatch(Actions.jumpToLevel1(this.idLevel1, this.rootId))
        this.props.Actions.jumpToLevel1(this.idLevel1, this.rootId);
      }
    } else {
      //如果是回退到这个页面，保留旧数据
    }

  }

  onReturnClick = (e) => {
    //清除state
    // this.props.dispatch(Actions.clearState());
  }

  onSearchClick = (e) => {
    // const url = `/yao-search/${this.bizType}/1`;
    // Util.openNewPage(url);
  }

  //点击一级类目回调
  onDirectoryItemClick = (index) => {
    const { categoryDatasLevel2 } = this.props.yao_categoryList;
    //切换一级类目
    // this.props.dispatch(Actions.categoryChangeSelectIndex(index));
    this.props.Actions.categoryChangeSelectIndex(index);

    //判断点击的一级类目是否需要请求数据
    const selectedItemId = this.getSelectedItemIdByIndex(index);
    const selectedDatasLevel2 = categoryDatasLevel2[selectedItemId];
    if (selectedDatasLevel2.length == 0) {
      //如果是第一次点击，没有数据，则请求数据
      // this.props.dispatch(Actions.getFirstLevelFrontCategory(this.rootId, selectedItemId));
      this.props.Actions.getFirstLevelFrontCategory(this.rootId, selectedItemId);
    }

  }

  /**
   * 根据选中item的index获取选中item的一级类目id
   */
  getSelectedItemIdByIndex(index) {
    const { categoryDatasLevel1, categoryDatasLevel2 } = this.props.yao_categoryList;
    const dataLevel1 = categoryDatasLevel1[this.rootId] || [];
    const selectedItemDataLevel1 = dataLevel1[index] || {};
    return selectedItemDataLevel1.id;
  }

  render() {
    // const topbarHeight = Common.getTopbarHeight();
    //51是搜索框的高度
    const contentHeight = document.documentElement.clientHeight - 51 - topbarHeight;
    //90是左边一级类目的宽度
    const contentWidth = document.documentElement.clientWidth - 90;

    const { categoryDatasLevel1, categoryDatasLevel2, curIndex } = this.props.yao_categoryList;
    let searchText;
    if (this.bizType === 'o2o') {
      searchText = this.props.yao_document['yao-o2o-search-default'] || '输入文字';
    } else {
      searchText = this.props.yao_document['yao-index-search-default'] || '输入文字';
    }
    const datasLevel1 = categoryDatasLevel1[this.rootId] || [];
    const selectedItemId = this.getSelectedItemIdByIndex(curIndex);
    const selectedDatasLevel2 = categoryDatasLevel2[selectedItemId] || [];

    return (
      <div className='category-list'>
        // <TopBar title={this.pageTitle} returnCallback={this.onReturnClick}/>
        <SearchBar text={searchText} onBtnClick={this.onSearchClick}/>
        <div className='category-list-container'>
          <CategoryDirectory height={contentHeight} onDirectoryItemClick={this.onDirectoryItemClick} curIndex={curIndex} datasLevel1={datasLevel1} needDefaultScroll={this.needDefaultScroll}/>
          <CategoryContent height={contentHeight} width={contentWidth} selectedDatasLevel2={selectedDatasLevel2} bizType={this.bizType}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    yao_categoryList: state.yao_categoryList,
    yao_document: state.yao_document
  };
}

const mapDispatchToProps = (dispatch) => {
  return { Actions: bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryList));

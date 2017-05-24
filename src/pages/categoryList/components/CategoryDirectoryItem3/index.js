/**
 * 分类列表页三级类目
 * Author: xiaohj
 * Date: 2015.2.17
 */
import React, { Component, PropTypes } from 'react';

import LazyLoadImage from 'common/js/components/LazyLoadImage';
import './style.scss';

export default class CategoryDirectoryItem3 extends Component {
  constructor(props) {
    super(props);

    this.onSelfClick = this.onSelfClick.bind(this);
  }

  onSelfClick(e) {
    const { dataLevel3, index, bizType } = this.props;

    //三级类目点击打点
    Common.makeLog({
      29: 'cate3_click',
      32: 'H5web_jkshop_channel_category',
      505: JSON.stringify({
        channel: Util.getChannel(),
        time: Date.now(),
        uid: Common.getUserId(),
        tree_id: this.rootId,
        cate_id: dataLevel3.id,
        cate_list_id: index + 1
      })
    });

    if (dataLevel3.actType == 1) {
      //url跳转
      Util.openNewPage(dataLevel3.url);
    } else if (dataLevel3.actType == 2) {
      //跳搜索结果页
      Util.openNewPage(`/yao-search/${bizType}/1/@/@/${dataLevel3.id}`);
    }
  }

  render() {
    const { itemWidth, dataLevel3 } = this.props;
    const heightPx = itemWidth + 45 + 'px';
    const itemWidthPx = itemWidth + 'px';
    return (
      <div className='category-directory-item3' style={{height: heightPx}} onClick={this.onSelfClick}>
        <div className='category-directory-item3-content'>
          <div style={{width: itemWidthPx, height: itemWidthPx}}>
            <LazyLoadImage src={Util.getTfsImg('common/images/image-placeholder.png', dataLevel3.img, itemWidth * 2)} className='category-directory-item3-image' holderClass='category-content'/>
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

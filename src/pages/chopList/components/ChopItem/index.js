/**
 * 剁手价商品组件
 * Author: xiaohj
 * Date: 2017.1.10
 */
import React, { Component } from 'react';
import LazyLoadImage from 'common/js/components/LazyLoadImage';
import PriceBar from 'common/js/components/PriceBar';

import './style.scss';

export default class ChopItem extends Component {
  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.itemData !== nextProps.itemData;
  }

  onItemClick(event) {
    const { itemData, isDisabled, pageIdPath, moduleId, dispatch } = this.props;

    if (isDisabled) {
      dispatch(CommonActions.showAlert({content: '活动未开始！'}));
      return;
    }

    Common.makeLog({
      29: "list_product",
      32: Common.getPage(),
      610: pageIdPath
    });

    const storeId = itemData.pharmacyMerchantId || itemData.merchantId || itemData.storeId || 0;
    let detailUrl = '/yao-detail/' + itemData.id;
    if (storeId) {
      detailUrl = detailUrl + '/' + storeId;
    }
    detailUrl = detailUrl + '?page_source=chop' + moduleId;
    Util.openNewPage(detailUrl);
  }

  render() {
    const { imgQuality, isWebp, size, index, itemData, isDisabled } = this.props;
    const { healthGoldDeductibleAmount, origPrice, price, available, picture, detailTitle, content } = itemData;
    const imageSrc = Util.getTfsImg(null, picture, size, size, imgQuality, isWebp);
    const isShowHealthGold = healthGoldDeductibleAmount > 0;
    const hasTag = CommonUtils.isString(content.tag) && content.tag !== '';
    const tagName = content.tag;
    const itemName = content.doc || detailTitle;
    return (
      <div className='chop-item clickable' onClick={this.onItemClick}>
        <div className='chop-image-container'>
          <LazyLoadImage index={index} className='chop-item-lazy-load-image' src={imageSrc} />
          <span className={hasTag ? 'chop-item-tag' : 'chop-item-tag-hidden'}>{tagName}</span>
          <div className={available == '1' ? 'sell-out hidden' : 'sell-out'}>
            <span className='sell-out-text'>卖光啦</span>
          </div>
        </div>
        <div className='content-container'>
          <div className='name-container'>{itemName}</div>
          <div className={isShowHealthGold ? 'health-gold-container' : 'health-gold-container hidden'}>
            健康金可抵￥{Util.formatPrice(healthGoldDeductibleAmount)}
          </div>
          <div className='price-container'>
            <PriceBar originalPrice={origPrice} currentPrice={price}/>
          </div>
          <button className={isDisabled ? 'buy-button .disabled' : 'buy-button clickable'} onClick={this.onItemClick}>马上抢</button>
        </div>
      </div>
    )
  }
}

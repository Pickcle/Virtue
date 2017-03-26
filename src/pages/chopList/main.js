/**
 * 剁手价列表页
 * Author: xiaohj
 * Date: 2017.1.6
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopBar from 'common/js/components/TopBar';
import store from 'app/store.js';
// import CountDown from 'common/js/components/CountDown';

// import clone from 'clone';

import Timer from 'common/js/components/Timer';
import ChopLoadMore from './components/ChopLoadMore';
import ChopItem from './components/ChopItem';

import * as Actions from './action.js';

import './main.scss';

class ChopList extends Component {

  constructor(props) {
    super(props);

    this.pageTitle = '今日剁手价';

    //当前已加载次数
    this.loadedTimes = 0;

    //每次加载数据条数
    this.pageSize = 20;

    //最多可加载次数
    this.maxLoadTimes = 5;

    //图片质量
    this.imgQuality = 70;

    //图片尺寸
    this.size = 250;

    //是否使用webp
    this.isWebp = false;
    // this.isWebp = Utils.checkWebp();

    //是否步步夺宝掉落宝箱
    this.hasGift = false;

    this.loadMore = this.loadMore.bind(this);
    this.isMaxLoad = this.isMaxLoad.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    // Util.setTitle(this.pageTitle);
    //
    // const { params, pageIdPath, dispatch } = this.props;
		// Common.makeLog({
		// 	32: Common.getPage(),
		// 	29: 'rushbuy' + params.chopId + 'PV',
		// 	610: pageIdPath
		// });
		// Common.makeLog({
		// 	32: Common.getPage(),
		// 	29: 'rushbuy' + params.chopId + 'UV',
		// 	610: pageIdPath
		// });
		// Common.makeLog({
		// 	32: Common.getPage(),
		// 	29: 'onload',
		// 	610: pageIdPath
		// });

    this.loadMore();

    //请求掉宝接口 modified by xiaohj
		// if (Util.getAppName() === 'PAJK') {
		// 	const requestData = {
		// 		_mt: 'promotion.fetchBox4Biz',
		// 		code: 'mall_201'
		// 	};
		// 	Util.pureFetch(requestData, 'UserLogin').then(result=>{
		// 		const boxInfo = result.content[0];
		// 		if (boxInfo && boxInfo.boxId) {
    //       // Sdk.invoke('getVersionCode').then(info => {
    //         let versionCode = Util.getAppVersion();
    //         if(versionCode >= 30900){
    //           this.hasGift = true;
    //           const content = {
    //             pageId: 'mall_201',
    //             boxInfo: boxInfo
    //           }
    //           Sdk.callScheme('global_h5_treasurebox', content);
    //           // const schemeContent = JSON.stringify(content);
    //           // window.location.href = `pajk://global_h5_treasurebox?content=${schemeContent}`;
    //         } else {
    //           dispatch(CommonActions.showAlert({
    //             content: '恭喜获得宝箱，请升级到3.9.0参与步步夺宝得碎片兑大奖'
    //           }));
    //         }
    //       // })
		// 		}
		// 	});
		// }
  }

  loadMore(callback) {
    const { dispatch, yao_address, params } = this.props;
    // const o2oAddress = Common.getO2oAddress();
    dispatch(Actions.getChopMoreInfo()).then(state => {
      this.loadedTimes += 1;
      if (callback && CommonUtils.isFunction(callback)) {
        callback();
      }
    });
  }

  isMaxLoad() {
    return this.loadedTimes >= this.maxLoadTimes || this.props.isLoadOver;
  }

  componentWillUnmount() {
    // this.props.dispatch(Actions.clearState());
    //如果当前页面出现了宝箱，那么在离开此页面时需要隐藏宝箱 modified by xiaohj
    // if (this.hasGift) {
    //   const content = {
    //     action: 'hidden',
    //     pageId: 'mall_201'
    //   }
    //   Sdk.callScheme('global_h5_treasurebox', content);
      // const schemeContent = JSON.stringify(content);
      // window.location.href = `pajk://global_h5_treasurebox?content=${schemeContent}`;
    // }
  }

  render() {
    let { startTime, peroid, products, pageIdPath, params } = this.props;
    // const systime = store.getState().global.systime;

    // products = products || [];
    const isDisabled = systime < startTime;
    const moduleId = params.chopId;

    let titleDom;
    if (isDisabled) {
      //还未开始
      titleDom = <div className='count-down-bar'>
        活动尚未开始，{new Date(startTime).getHours()}:00开抢
      </div>
    } else {
      titleDom = <div className='count-down-bar'>
        距本场结束还有
        <div className='count-down'>
          <Timer systime={Date.now()} startTime={startTime} peroid={peroid}/>
        </div>
      </div>
    }

    return (
      <div className='chop-list'>
        <TopBar title={this.pageTitle}/>
        {titleDom}
        <div className='item-container'>
          {
            products.map((value, key) => {
              return <ChopItem itemData={value} pageIdPath={pageIdPath} moduleId={moduleId} isDisabled={isDisabled} imgQuality={this.imgQuality} isWebp={this.isWebp} size={this.size} key={key} index={key}/>
            })
          }
        </div>
        <ChopLoadMore loadMore={this.loadMore} isMaxLoad={this.isMaxLoad}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { yao_chopList, yao_address } = state;
  return {
    // pageIdPath: state.yao_global.pageIdPath,
    // systime: state.global.systime,
    // yao_address,
    ...yao_chopList
  };
}

// function mapDispatchToProps(dispatch) {
//     return { Actions: bindActionCreators(Actions, dispatch) };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReactRouter.withRouter(ChopList))
export default connect(mapStateToProps)(withRouter(ChopList))

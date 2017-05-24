/**
 * 分类列表页路由
 * Author: xiaohj
 * Date: 2017.1.6
 */
import store, { injectAsyncReducer } from 'src/store.js';

module.exports = {
  path: 'yao-categorylist/:bizType/:rootId(/:idLevel1)',
	getComponent(nextState, cb) {
		require.ensure([], require => {
			const { yao_categoryList } = require('./reducer.js');
			injectAsyncReducer(store, 'yao_categoryList', yao_categoryList);
			cb(null, require('./main.js'))
		}, 'categoryList');
	}
}

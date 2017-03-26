/**
 * 剁手价列表页路由
 * Author: xiaohj
 * Date: 2017.1.6
 */
import store, { injectAsyncReducer } from 'app/store.js';

module.exports = {
	path: 'chop',
	getComponent(nextState, cb) {
		require.ensure([], require => {
			const { yao_chopList } = require('./reducer.js');
			injectAsyncReducer(store, 'yao_chopList', yao_chopList);
			cb(null, require('./main.js'))
		}, 'chopList');
	}
}

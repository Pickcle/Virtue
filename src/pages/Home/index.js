/**
 * 首页路由
 * Author: xiaohj
 * Date: 2017.1.4
 */
import store, { injectAsyncReducer } from 'src/store.js';

module.exports = {
  getComponent(nextState, cb) {
    require.ensure([], require => {
      const { home } = require('./reducer.js');
      injectAsyncReducer(store, 'home', home);
      cb(null, require('./main.js'));
    }, 'home')
  }
}

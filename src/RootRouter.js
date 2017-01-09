/**
 * 页面根路由
 * Author: xiaohj
 * Date: 2017.1.4
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store, { injectAsyncReducer } from './store.js';
import Root from 'common/js/containers/Root';

const routes = {
  path: '/',
  component: Root,
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./pages/Home'));
      }, 'indexRoute')
    }
  },
  childRoutes: [
    // require('./pages/Apple'),
    // require('./pages/Banana'),
    // require('./pages/Orange')
  ]
}

export default class RootRouter extends Component {
  render() {
    console.log('---xhj---store:');
    console.log(store);
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
      </Provider>
    )
  }
}

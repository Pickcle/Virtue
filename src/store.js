/**
 * 创建store实例，绑定中间件
 * Author: xiaohj
 * Date: 2016.12.28
 */
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createReducer } from './RootReducer.js';

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, applyMiddleware(thunkMiddleware));
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}

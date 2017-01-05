/**
 * 绑定公共Reducer
 * Author: xiaohj
 * Date: 2017.1.4
 */
import { combineReducers } from 'redux';
import * as CommonReducers from 'common/js/reducers';

export default function createReducer(asyncReducers){
  return combineReducers({
    ...asyncReducers,
    ...CommonReducers
  })
}

webpackJsonp([1],{

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(261);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  getComponent: function getComponent(nextState, cb) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      var _require = __webpack_require__(270),
	          home = _require.home;

	      (0, _store.injectAsyncReducer)(_store2.default, 'yao_home', home);
	      cb(null, __webpack_require__(271));
	    });
	  }
	}; /**
	    * 首页路由
	    * Author: xiaohj
	    * Date: 2017.1.4
	    */

/***/ }

});
//# sourceMappingURL=1.indexRoute-353c2963fd4dd6c38a5e.js.map
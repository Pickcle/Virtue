const react = require('react');
// console.log('xhjLog: react', react)

const redux = require.ensure([], function (require) {
  require('redux');
}, 'redux');
// console.log('xhjLog: redux', redux)

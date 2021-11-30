
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DataManger = factory());
})(this, (function () { 'use strict';

  // utils is a library of generic helper functions non-specific to axios
  const toS = Object.prototype.toString;
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
      return toS.call(val) === '[object Array]';
  }
  var until = {
      isArray
  };

  // if (process.env.NODE_ENV === 'production') {
  //   import('../public/scss/index.scss').then(res => {
  //     console.log('加载文档样式')
  //   })
  // }
  console.log('', until);
  class DataManger {
      constructor(options) {
          console.log(options);
      }
  }

  return DataManger;

}));

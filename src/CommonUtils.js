export default {
  function isArray(arr) {
    return typeof arr == 'object' && Array.isArray(arr);
  }

  function isString(str) {
    return typeof str == 'string';
  }

  function isSymbol(sym) {
    return typeof sym == 'Symbol';
  }
}

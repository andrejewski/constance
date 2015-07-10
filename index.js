
module.exports = function constance(prefix, keys, postfix) {
  if(typeof prefix === 'object') {
    postfix = keys;
    keys = prefix;
    prefix = '';
  }
  postfix = postfix || '';

  if(!Array.isArray(keys)) keys = Object.keys(keys);
  return keys.reduce(function(obj, key) {
    obj[key] = prefix + key + postfix;
    return obj;
  }, {});
}


let cache = new WeakMap();

let memoize = f => (...x) => {
  let deep = map => (head, ...tail) => {
    if (tail.length > 0) {
      if (!map.get(head)) {
        map.set(head, {});
      }
      if (!map.get(head).map) {
        map.get(head).map = new Map();
      }
      return deep(map.get(head).map)(...tail);
    } else { // for result
      if (!map.get(head)) {
        map.set(head, {});
      }
      if (!map.get(head).hasValue) {
        //console.log('from real');
        let res = f(...x);
        map.get(head).value = res;
        map.get(head).hasValue = true;
        return res;
      } else {
        //console.log('from cache');
      }
      return map.get(head).value;
    }
  };
  let map;
  if (cache.has(f)) {
    map = cache.get(f);
  } else {
    map = new Map();
    cache.set(f, map);
  }
  return deep(map)(...x);
}

memoize.clear = f => cache.delete(f);

module.exports = memoize;

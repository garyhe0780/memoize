# memoize

## introduce
just memoize it

## install
```
npm install --save-dev github:ukari/memoize
```

## usage
``` javascript
let Memoize = require('memoize');

let add = (...x) => x.reduce((acc, cur) => acc + cur, 0);

add = Memoize(add);

add(1);       // real
add(1, 2);    // real
add(1, 2);    // hit
```

## usage with let decorator
[proposal about let decorator](https://github.com/ukari/javascript-let-decorators)

``` javascript

@Memoize
let add = (...x) => x.reduce((acc, cur) => acc + cur, 0);

add(1);       // real
add(1, 2);    // real
add(1, 2);    // hit
```

## clear cache
auto clear cache if function reference not exist any more

manually
``` javascript
add(1, 2);    // real
add(1, 2);    // hit
Memoize.clear(add);
add(1, 2);    // real
add(1, 2);    // hit
```

## license
MIT

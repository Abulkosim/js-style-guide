// bad
const items1 = new Array();

// good
const items2 = [];

const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');


// bad
const len = items1.length;
const itemsCopy1 = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy1[i] = items1[i];
}

// good
const itemsCopy2 = [...items1];

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr1 = Array.prototype.slice.call(arrLike);

// good
const arr2 = Array.from(arrLike);
console.log(arr2);
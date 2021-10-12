/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
function hasValueDepth(obj, str) {
  const allValues = [];
  for (key in obj) {
    if (typeof obj[key] !== 'object') {
      allValues.push(obj[key]);
    } else {
      hasVal = hasValueDepth(obj[key], str);
      if (hasVal) return true;
    }
  } const exist = allValues.includes(str);
  return exist;
}

const obj = {
  hello: 'world',
  goDeeper: {
    1961: 'Barack Obama',
    1964: 'Michelle Obama',
    1935: 'Elvis Presley',
    1984: {
      author: 'George Orwell',
      genre: 'dystopia',
    },
  },
};

console.log(hasValueDepth(obj, 'hello')); // false
console.log(hasValueDepth(obj, 'Elvis Presley')); // true
console.log(hasValueDepth(obj, 'author')); // false
console.log(hasValueDepth(obj, 'dystopia')); // true

const obj2 = {
  hello: 'world',
  goDeeper: {
    1961: 'Barack Obama',
    1964: 'Michelle Obama',
    1935: 'Elvis Presley',
    1984: {
      author: 'George Orwell',
      genre: 'dystopia',
    },
  },
  x: {
    y: 'z',
  },
};
console.log(hasValueDepth(obj2, 'z'));

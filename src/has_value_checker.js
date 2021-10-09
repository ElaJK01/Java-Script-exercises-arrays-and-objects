/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// eslint-disable-next-line consistent-return
function hasValue(object, val) {
  const valuesArray = Object.values(object);
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i] === val) {
      return true;
    }
    return false;
  }
}

console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'bonjour')); // true
console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'hello')); // false
console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'tasty')); // false

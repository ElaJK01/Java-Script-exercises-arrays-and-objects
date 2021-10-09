/* eslint-disable no-plusplus */
/* eslint-disable no-console */
function removeDouble(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      arr.splice(i, i + 1);
    }
  } return arr;
}

const stuff = ['suit', 'clock', 'butter', 'suit'];
console.log(removeDouble(stuff));
console.log(stuff);

// [ 'clock', 'butter', 'suit' ]

const mixed = ['hello', 'hello', 23, -3, 23, 'hello'];
console.log(removeDouble(mixed));
console.log(mixed);
// [ -3, 23, 'hello' ]

const someStuff = ['kot', 'dog', 'kot', 'pies'];
console.log(removeDouble(someStuff));
console.log(someStuff);
